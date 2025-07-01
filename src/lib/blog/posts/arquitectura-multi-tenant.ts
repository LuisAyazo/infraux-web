import { BlogPost } from '../types';
import { authors } from '../authors';

export const arquitecturaMultiTenant: BlogPost = {
  id: 'arquitectura-multi-tenant-dia-1',
  title: 'Arquitectura Multi-tenant desde el Día 1',
  excerpt: 'Nuestras decisiones de diseño iniciales para soportar múltiples clientes de forma segura y escalable, usando PostgreSQL y Supabase.',
  content: `
## Por Qué Multi-tenant desde el Inicio

Una de las decisiones más importantes que tomamos fue diseñar InfraUX como una aplicación multi-tenant desde el primer día. Esta decisión, aunque agregó complejidad inicial, ha sido fundamental para nuestro crecimiento y escalabilidad.

### ¿Qué es Multi-tenancy?

Multi-tenancy es un patrón de arquitectura donde una única instancia de la aplicación sirve a múltiples clientes (tenants), manteniendo sus datos completamente aislados y seguros. En nuestro caso, cada "company" en InfraUX es un tenant independiente.

### El Gran Debate: MongoDB vs PostgreSQL

Inicialmente, consideramos MongoDB por su flexibilidad con esquemas dinámicos. Los diagramas de infraestructura pueden ser muy variados, y la naturaleza schema-less de MongoDB parecía ideal. Sin embargo, después de semanas de análisis, PostgreSQL emergió como el ganador.

#### Por qué elegimos PostgreSQL:

| Característica | PostgreSQL | MongoDB |
|----------------|------------|---------|
| **Row Level Security** | ✅ Nativo | ❌ Manual |
| **JSONB** | ✅ Flexibilidad + Estructura | ✅ Solo flexibilidad |
| **Transacciones ACID** | ✅ Completas | ⚠️ Limitadas |
| **Integración Supabase** | ✅ Perfecta | ❌ No disponible |
| **Madurez** | ✅ 30+ años | ✅ 10+ años |

### Implementación de Row Level Security

RLS es la piedra angular de nuestra arquitectura multi-tenant. Cada tabla tiene políticas que garantizan que los usuarios solo pueden acceder a datos de su company:

\`\`\`sql
-- Política para la tabla diagrams
CREATE POLICY "Users can only see their company diagrams" ON diagrams
  FOR SELECT
  USING (company_id = auth.jwt() ->> 'company_id');

-- Política para INSERT
CREATE POLICY "Users can only create diagrams in their company" ON diagrams
  FOR INSERT
  WITH CHECK (company_id = auth.jwt() ->> 'company_id');

-- Política para UPDATE
CREATE POLICY "Users can only update their company diagrams" ON diagrams
  FOR UPDATE
  USING (company_id = auth.jwt() ->> 'company_id')
  WITH CHECK (company_id = auth.jwt() ->> 'company_id');
\`\`\`

### Estructura de Datos Multi-tenant

Nuestra estructura de base de datos sigue un patrón consistente:

\`\`\`sql
-- Tabla companies (root del tenant)
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  settings JSONB DEFAULT '{}'::jsonb
);

-- Tabla users con relación a company
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('owner', 'admin', 'member', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla diagrams con company_id
CREATE TABLE diagrams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  content JSONB NOT NULL, -- Aquí almacenamos el diagrama completo
  environment TEXT NOT NULL,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_diagrams_company_id ON diagrams(company_id);
CREATE INDEX idx_diagrams_environment ON diagrams(company_id, environment);
CREATE INDEX idx_diagrams_content_gin ON diagrams USING gin(content);
\`\`\`

### Gestión de Sesiones y Context

Cada request incluye el company_id en el JWT token, lo que permite a PostgreSQL aplicar automáticamente las políticas RLS:

\`\`\`typescript
// middleware/auth.ts
export async function withAuth(req: Request) {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new Error('No authentication token');
  }
  
  const { data: { user }, error } = await supabase.auth.getUser(token);
  
  if (error || !user) {
    throw new Error('Invalid token');
  }
  
  // El company_id está en los metadatos del usuario
  const companyId = user.user_metadata.company_id;
  
  // Supabase automáticamente incluye esto en el JWT
  return { user, companyId };
}
\`\`\`

### Beneficios de Nuestra Arquitectura

<div class="success-box">
✅ **Seguridad por Diseño:** Con RLS, es imposible acceder accidentalmente a datos de otro tenant. Incluso si hay un bug en el código de la aplicación, PostgreSQL bloqueará el acceso.
</div>

<div class="info-box">
💡 **Escalabilidad Horizontal:** Podemos escalar agregando más servidores de aplicación sin preocuparnos por la segregación de datos.
</div>

<div class="warning-box">
⚠️ **Backup y Restore Granular:** Podemos hacer backup o restaurar datos de un tenant específico sin afectar a otros.
</div>

### Desafíos y Soluciones

#### Desafío 1: Migraciones de Schema

Las migraciones deben ser cuidadosamente diseñadas para no romper el aislamiento de datos.

**Solución:** Todas las migraciones pasan por un proceso de revisión estricto y se prueban en un ambiente multi-tenant de staging.

#### Desafío 2: Performance con Muchos Tenants

A medida que crecemos, las queries pueden volverse lentas si no están bien optimizadas.

**Solución:** Índices estratégicos en company_id y particionamiento de tablas grandes por tenant.

#### Desafío 3: Límites y Quotas por Tenant

Diferentes planes necesitan diferentes límites de recursos.

**Solución:** Sistema de quotas flexible almacenado en la tabla companies:

\`\`\`json
{
  "quotas": {
    "max_diagrams": 10,
    "max_users": 5,
    "max_environments": 3,
    "features": {
      "collaboration": true,
      "api_access": false,
      "custom_domains": false
    }
  }
}
\`\`\`

### Lecciones Aprendidas

1. **Invertir en arquitectura temprano paga dividendos:** La complejidad inicial se ha traducido en facilidad de mantenimiento
2. **RLS es poderoso pero requiere disciplina:** Cada tabla nueva necesita políticas bien pensadas
3. **Testing multi-tenant es crítico:** Tenemos tests específicos que verifican el aislamiento de datos
4. **Monitoreo por tenant es esencial:** Necesitas saber qué tenant está causando problemas

### El Futuro: Sharding y Más Allá

Aunque nuestra arquitectura actual puede manejar miles de tenants, ya estamos planeando el siguiente nivel:

- **Sharding por tenant:** Los tenants grandes podrán tener su propia base de datos
- **Multi-región:** Tenants podrán elegir dónde almacenar sus datos
- **Bring Your Own Database:** Empresas podrán usar su propia instancia de PostgreSQL

La decisión de ir multi-tenant desde el día 1 ha sido fundamental para nuestro éxito. Aunque agregó complejidad inicial, nos ha permitido crecer de manera segura y escalable, manteniendo los datos de nuestros clientes completamente aislados y protegidos.

### Métricas de Performance

| Métrica | Valor | Objetivo |
|---------|-------|----------|
| **Queries/segundo** | 12,000 | 10,000 |
| **Latencia p50** | 23ms | < 50ms |
| **Latencia p99** | 87ms | < 200ms |
| **Aislamiento de datos** | 100% | 100% |
| **Uptime** | 99.97% | 99.9% |
`,
  date: '2024-11-14',
  week: 2,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.ana,
  tags: ['arquitectura', 'multitenant', 'postgresql', 'supabase'],
  readTime: '8 min',
  featured: false,
};
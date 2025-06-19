# Plan de Mejoras para Landing Page InfraUX

## Resumen Ejecutivo
Este documento detalla las mejoras a implementar en el landing page de InfraUX, enfocándose en:
1. Corrección del menú dropdown
2. Rediseño completo de la página de precios
3. Actualización de los planes en la página principal
4. Mejora general de la experiencia de usuario

## 1. Corrección del Menú Dropdown

### Problema Actual
- El dropdown desaparece cuando el usuario intenta mover el mouse del botón al menú
- Existe un gap visual que causa la pérdida del estado hover

### Solución Propuesta
```typescript
// Implementar delay y estado compartido
const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

const handleMouseEnter = (key: string) => {
  if (dropdownTimeout) clearTimeout(dropdownTimeout);
  setActiveDropdown(key);
};

const handleMouseLeave = () => {
  const timeout = setTimeout(() => {
    setActiveDropdown(null);
  }, 150); // 150ms delay
  setDropdownTimeout(timeout);
};
```

### Cambios Específicos
- Eliminar el `mt-1` del dropdown y usar `pt-2` en su lugar
- Agregar un contenedor padre para mantener el hover
- Implementar un delay de 150ms antes de cerrar

## 2. Rediseño de la Página de Precios

### Estructura Visual
```
┌─────────────────────────────────────────────────────────┐
│                    HERO SECTION                         │
│         "Planes que escalan con tu equipo"             │
│              [Toggle Mensual/Anual]                     │
└─────────────────────────────────────────────────────────┘
                            ↓
┌────────┬────────┬────────┬────────┬────────┐
│ HOBBY  │STARTER │  TEAM  │BUSINESS│ENTERPRISE│
│  FREE  │  $19   │  $49   │  $99   │ Custom │
│        │        │ ⭐POPULAR│        │        │
└────────┴────────┴────────┴────────┴────────┘
```

### Mejoras de Diseño
- **Layout**: 5 planes en una fila (scroll horizontal en móvil)
- **Espaciado**: Aumentar padding interno y márgenes entre secciones
- **Altura**: Cards más altas para mejor legibilidad
- **Destacados**: Características principales con iconos
- **Comparación**: Tabla más visual con checkmarks grandes

## 3. Características Actualizadas por Plan

### Hobby (Gratis)
- ✅ 1 proyecto activo
- ✅ 1 usuario
- ✅ 3 diagramas por proyecto
- ✅ Exportar PNG básico
- ✅ Templates básicas (5)
- ✅ Comunidad Discord
- ❌ Sin colaboración
- ❌ Sin historial de versiones
- ❌ Sin API

### Starter ($19/mes)
- ✅ 5 proyectos activos
- ✅ 1 usuario
- ✅ Diagramas ilimitados
- ✅ Exportar PNG/SVG/PDF
- ✅ Templates premium (50+)
- ✅ Historial 30 días
- ✅ Soporte email (48h)
- ✅ GitHub integration
- ✅ API básica
- ❌ Sin colaboración tiempo real

### Team ($49/usuario/mes) ⭐ MÁS POPULAR
- ✅ Proyectos ilimitados
- ✅ Hasta 10 usuarios
- ✅ Colaboración en tiempo real
- ✅ Ambientes (dev/staging/prod)
- ✅ Todas las integraciones
- ✅ API completa
- ✅ Historial ilimitado
- ✅ Análisis de costos
- ✅ Soporte prioritario (24h)
- ✅ Backup diario

### Business ($99/usuario/mes)
- ✅ Todo de Team +
- ✅ Usuarios ilimitados
- ✅ SSO/SAML
- ✅ Audit logs avanzados
- ✅ Políticas de seguridad custom
- ✅ Ambientes ilimitados
- ✅ Soporte 24/7 con SLA
- ✅ Manager de cuenta
- ✅ Revisión trimestral
- ✅ Backup continuo
- ✅ Multi-región

### Enterprise (Personalizado)
- ✅ Todo de Business +
- ✅ SLA 99.99%
- ✅ Soporte dedicado 24/7
- ✅ Capacitación personalizada
- ✅ Desarrollo de features
- ✅ Contratos flexibles
- ✅ Facturación personalizada
- ✅ Compliance (SOC2, HIPAA)
- ✅ Disaster recovery
- ✅ API prioritaria

## 4. Tooltips Explicativos

Agregar tooltips para términos técnicos:
- **SSO/SAML**: "Inicio de sesión único con tu proveedor de identidad corporativo"
- **Audit logs**: "Registro detallado de todas las acciones para cumplimiento y seguridad"
- **API**: "Interfaz para automatizar y integrar InfraUX con tus herramientas"
- **Ambientes**: "Espacios separados para desarrollo, pruebas y producción"
- **Multi-región**: "Despliega tu infraestructura en múltiples regiones geográficas"
- **SLA**: "Acuerdo de nivel de servicio con garantía de disponibilidad"

## 5. Actualización de Planes en Home

### Mostrar solo 3 planes principales:
1. **Hobby** - "Empieza gratis"
2. **Team** - "Para equipos" (DESTACADO)
3. **Enterprise** - "Soluciones a medida"

### Con link a:
- "Ver todos los planes →" que lleva a /precios

## 6. Mejoras Adicionales

### Responsive Design
- Desktop: 5 columnas
- Tablet: 3 columnas con scroll
- Mobile: 1 columna con scroll horizontal opcional

### Animaciones
- Hover suave en cards
- Transiciones en toggles
- Efectos de entrada al scroll

### Performance
- Lazy loading de componentes pesados
- Optimización de imágenes
- Minimizar re-renders

## 7. Orden de Implementación

1. **Fix del menú dropdown** (Prioridad Alta)
2. **Rediseño página de precios** (Prioridad Alta)
3. **Actualizar planes en home** (Prioridad Media)
4. **Agregar tooltips** (Prioridad Media)
5. **Optimizaciones finales** (Prioridad Baja)

## Notas Técnicas

- Mantener consistencia con el diseño actual
- Usar Tailwind CSS para todos los estilos
- Asegurar compatibilidad con dark mode
- Testear en múltiples dispositivos
- Validar accesibilidad (ARIA labels, contraste)
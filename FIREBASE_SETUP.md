# Configuración de Firebase para Lista de Espera

## Resumen de la Implementación

Se ha implementado Firebase para gestionar la lista de espera y el envío de correos electrónicos. La integración incluye:

### 1. **Servicios Implementados**

#### Firebase Firestore
- Base de datos para almacenar los registros de la lista de espera
- Colección: `waitlist`
- Campos almacenados:
  - `email`: Email del usuario
  - `name`: Nombre (opcional)
  - `company`: Empresa (opcional)
  - `source`: Origen del registro ('registro', 'login', 'prueba-gratis')
  - `createdAt`: Timestamp de creación
  - `metadata`: Información adicional (user agent, referrer, UTM params)

#### SendGrid para Emails
- Servicio de envío de correos electrónicos
- Email de bienvenida automático al unirse a la lista
- Plantilla HTML responsive incluida

### 2. **Archivos Creados**

- `src/lib/firebase.ts`: Configuración e inicialización de Firebase
- `src/lib/waitlist-service.ts`: Servicio para gestionar la lista de espera
- `src/lib/email-service.ts`: Servicio para envío de emails con SendGrid
- `src/app/api/waitlist/route.ts`: API endpoint para manejar solicitudes
- `.env.example`: Plantilla de variables de entorno

### 3. **Formularios Actualizados**

Los siguientes formularios ahora están conectados con Firebase:
- `/registro`: Formulario de registro completo
- `/login`: Formulario de notificación para usuarios existentes
- `/prueba-gratis`: Formulario de lista de espera

### 4. **Configuración Requerida**

#### Paso 1: Crear proyecto en Firebase
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto
3. Habilita Firestore Database
4. Ve a Project Settings > General
5. Crea una nueva Web App
6. Copia las credenciales de configuración

#### Paso 2: Configurar SendGrid
1. Crea una cuenta en [SendGrid](https://sendgrid.com/)
2. Genera una API Key
3. Verifica tu dominio de envío
4. Configura el email remitente

#### Paso 3: Variables de Entorno
Crea un archivo `.env.local` basado en `.env.example`:

```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=tu_measurement_id

# SendGrid
SENDGRID_API_KEY=tu_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@tudominio.com

# Admin
ADMIN_API_KEY=una_clave_segura_para_admin
```

### 5. **Funcionalidades Implementadas**

#### API Endpoints

**POST /api/waitlist**
- Agrega un usuario a la lista de espera
- Valida datos de entrada
- Previene duplicados por email
- Envía email de bienvenida automáticamente
- Captura metadata (UTM params, user agent, etc.)

**GET /api/waitlist** (requiere API key)
- Obtiene estadísticas de la lista
- Total de registros
- Registros por fuente
- Registros del día

#### Validaciones
- Validación de formato de email
- Prevención de emails duplicados
- Límites de longitud en campos
- Validación de origen (source)

#### Manejo de Errores
- Mensajes de error claros para el usuario
- Logging de errores en consola
- Fallback graceful si los servicios no están configurados

### 6. **Uso en Producción**

#### Seguridad en Firestore

##### Configuración de Reglas de Seguridad

Las reglas de seguridad de Firestore controlan quién puede leer y escribir datos en tu base de datos. Es crucial configurarlas correctamente para evitar accesos no autorizados.

##### Reglas para Desarrollo/Testing

Durante el desarrollo, puedes usar estas reglas más permisivas para la colección `waitlist`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir solo crear documentos en waitlist (no leer/actualizar/eliminar)
    match /waitlist/{document} {
      allow create: if true;
      allow read: if false;
      allow update: if false;
      allow delete: if false;
    }
  }
}
```

**⚠️ ADVERTENCIA**: Estas reglas permiten que cualquiera pueda crear documentos en la colección `waitlist`. Úsalas solo en desarrollo.

##### Reglas para Producción (Recomendadas)

Para producción, usa reglas más restrictivas que validen los datos:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Función para validar formato de email
    function isValidEmail(email) {
      return email.matches('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    }
    
    // Función para validar los campos requeridos
    function hasRequiredFields() {
      return request.resource.data.keys().hasAll(['email', 'source', 'createdAt']) &&
             request.resource.data.email is string &&
             request.resource.data.source is string &&
             request.resource.data.createdAt is timestamp;
    }
    
    // Función para validar longitud de campos
    function isValidLength() {
      return request.resource.data.email.size() <= 255 &&
             (!('name' in request.resource.data) || request.resource.data.name.size() <= 100) &&
             (!('company' in request.resource.data) || request.resource.data.company.size() <= 100);
    }
    
    // Función para validar source válido
    function isValidSource() {
      return request.resource.data.source in ['registro', 'login', 'prueba-gratis'];
    }
    
    // Reglas para la colección waitlist
    match /waitlist/{document} {
      // Permitir crear solo si los datos son válidos
      allow create: if hasRequiredFields() &&
                      isValidEmail(request.resource.data.email) &&
                      isValidLength() &&
                      isValidSource();
      
      // No permitir lectura directa (solo desde el servidor con Admin SDK)
      allow read: if false;
      
      // No permitir actualizaciones ni eliminaciones desde el cliente
      allow update: if false;
      allow delete: if false;
    }
  }
}
```

##### Cómo Aplicar las Reglas de Seguridad

**Opción 1: Desde la Consola de Firebase (Recomendado)**

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. En el menú lateral, ve a **Firestore Database**
4. Haz clic en la pestaña **Rules** (Reglas)
5. Reemplaza el contenido con las reglas deseadas
6. Haz clic en **Publish** (Publicar)
7. Espera la confirmación de que las reglas se han publicado

**Opción 2: Usando Firebase CLI**

1. Instala Firebase CLI si no lo tienes:
   ```bash
   npm install -g firebase-tools
   ```

2. Inicia sesión en Firebase:
   ```bash
   firebase login
   ```

3. Inicializa Firebase en tu proyecto:
   ```bash
   firebase init firestore
   ```

4. Crea o edita el archivo `firestore.rules` en la raíz de tu proyecto con las reglas deseadas

5. Despliega las reglas:
   ```bash
   firebase deploy --only firestore:rules
   ```

##### Solución al Error "Missing or insufficient permissions"

Si encuentras este error, verifica:

1. **Las reglas están publicadas**: Asegúrate de haber publicado las reglas después de modificarlas
2. **El formato es correcto**: Verifica que no haya errores de sintaxis en las reglas
3. **Los campos coinciden**: Asegúrate de que tu aplicación envíe todos los campos requeridos
4. **Tiempo de propagación**: Las reglas pueden tardar hasta 1 minuto en propagarse

##### Testing de Reglas

Puedes probar tus reglas en el simulador de reglas:

1. En Firebase Console, ve a Firestore > Rules
2. Haz clic en **Rules playground**
3. Configura:
   - **Simulation type**: Create
   - **Location**: `/waitlist/test-doc`
   - **Authenticated**: false
   - **Request data**:
     ```json
     {
       "email": "test@example.com",
       "source": "registro",
       "createdAt": "2024-01-01T00:00:00Z"
     }
     ```
4. Haz clic en **Run** para verificar si la operación sería permitida

#### Monitoreo
- Revisa los logs en Firebase Console
- Monitorea el uso de SendGrid
- Configura alertas para errores

### 7. **Testing Local**

Para probar localmente:

1. Instala las dependencias: `npm install`
2. Configura las variables de entorno
3. Ejecuta el proyecto: `npm run dev`
4. Prueba los formularios en:
   - http://localhost:3000/registro
   - http://localhost:3000/login
   - http://localhost:3000/prueba-gratis

### 8. **Próximos Pasos Recomendados**

1. **Configurar Firebase Admin SDK** para operaciones más avanzadas
2. **Implementar dashboard de administración** para ver la lista de espera
3. **Agregar más plantillas de email** (recordatorios, actualizaciones)
4. **Implementar rate limiting** en la API
5. **Agregar webhooks** para integraciones externas
6. **Configurar backups automáticos** de Firestore

### 9. **Troubleshooting**

**Error: Firebase app not initialized**
- Verifica que las variables de entorno estén configuradas correctamente
- Asegúrate de que el archivo `.env.local` existe

**Error: Email no enviado**
- Verifica la API key de SendGrid
- Confirma que el dominio esté verificado en SendGrid
- Revisa los logs de SendGrid para más detalles

**Error: Duplicate email**
- Es el comportamiento esperado para prevenir spam
- El usuario verá un mensaje indicando que ya está registrado
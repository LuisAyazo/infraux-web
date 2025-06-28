# Configuración del Servicio de Email

## Estado Actual

El sistema está configurado para funcionar **sin servicio de email**. Cuando un usuario se registra en la lista de espera:
- Los datos se guardan correctamente en Firebase
- Se muestra un log en la consola indicando qué email se habría enviado
- El sistema NO falla si no hay servicio de email configurado

## Configurar Resend (Recomendado)

### 1. Crear cuenta en Resend
1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita (1000 emails/mes gratis)
3. Verifica tu dominio o usa el dominio de prueba que te proporcionan

### 2. Obtener API Key
1. En el dashboard de Resend, ve a "API Keys"
2. Crea una nueva API key
3. Copia la key (empieza con `re_`)

### 3. Configurar variables de entorno
En tu archivo `.env.local` o `.env`, agrega:

```env
RESEND_API_KEY=re_tu_api_key_aqui
RESEND_FROM_EMAIL=noreply@tudominio.com
```

### 4. Verificar funcionamiento
1. Reinicia el servidor de desarrollo
2. Registra un usuario en la lista de espera
3. Revisa los logs de la consola para confirmar el envío

## Alternativas Gratuitas

### EmailJS (200 emails/mes gratis)
- No requiere backend
- Funciona directamente desde el frontend
- Ideal para proyectos pequeños
- [https://www.emailjs.com](https://www.emailjs.com)

### Firebase Cloud Functions + Nodemailer
- Usar Gmail SMTP con los límites de Gmail
- Requiere configurar Cloud Functions
- Más complejo pero totalmente gratuito con Gmail

### Sin servicio de email
- La opción más simple
- Los registros se guardan en Firebase
- Puedes enviar emails manualmente más tarde
- Ideal para MVP o pruebas

## Logs del Sistema

Cuando NO hay servicio configurado:
```
📧 Email que se habría enviado (servicio no configurado):
Para: usuario@ejemplo.com
Asunto: ¡Bienvenido a la lista de espera de InfraUX! 🚀
Nombre: Juan
---
Nota: Configura RESEND_API_KEY en .env para enviar emails reales
```

Cuando el servicio está configurado:
```
✅ Email enviado exitosamente: { id: 'email_id_aqui' }
✅ Proceso de email completado para: usuario@ejemplo.com
```

## Troubleshooting

### El email no se envía
1. Verifica que las variables de entorno estén configuradas
2. Asegúrate de que el dominio esté verificado en Resend
3. Revisa los logs de la consola para errores específicos

### Error de dominio no verificado
- Usa el dominio de prueba de Resend para desarrollo
- O verifica tu dominio siguiendo las instrucciones de Resend

### Límite de emails alcanzado
- El plan gratuito tiene un límite de 1000 emails/mes
- Considera actualizar el plan o usar otra alternativa
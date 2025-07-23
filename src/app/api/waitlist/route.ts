import { NextRequest, NextResponse } from 'next/server';
import { WaitlistService, WaitlistEntry } from '@/lib/waitlist-service';
import { EmailService } from '@/lib/email-service';

// Validación de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validación de datos de entrada
function validateWaitlistData(data: any): { valid: boolean; error?: string } {
  if (!data.email) {
    return { valid: false, error: 'El email es requerido' };
  }

  if (!isValidEmail(data.email)) {
    return { valid: false, error: 'El formato del email no es válido' };
  }

  if (!data.source || !['registro', 'login', 'prueba-gratis', 'iniciar-sesion', 'register'].includes(data.source)) {
    return { valid: false, error: 'La fuente no es válida' };
  }

  if (data.name && data.name.length > 100) {
    return { valid: false, error: 'El nombre es demasiado largo' };
  }

  if (data.company && data.company.length > 100) {
    return { valid: false, error: 'El nombre de la empresa es demasiado largo' };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Obtener datos del body
    const body = await request.json();
    
    // Validar datos
    const validation = validateWaitlistData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    // Obtener metadata adicional
    const metadata: WaitlistEntry['metadata'] = {
      userAgent: request.headers.get('user-agent') || undefined,
      referrer: request.headers.get('referer') || undefined,
    };

    // Extraer parámetros UTM de la URL si existen
    const url = new URL(request.url);
    const utmSource = url.searchParams.get('utm_source');
    const utmMedium = url.searchParams.get('utm_medium');
    const utmCampaign = url.searchParams.get('utm_campaign');

    if (utmSource) metadata.utm_source = utmSource;
    if (utmMedium) metadata.utm_medium = utmMedium;
    if (utmCampaign) metadata.utm_campaign = utmCampaign;

    // Crear entrada para la lista de espera
    const waitlistEntry: Partial<WaitlistEntry> = {
      email: body.email.toLowerCase().trim(),
      source: body.source,
      metadata
    };

    if (body.name) {
      waitlistEntry.name = body.name.trim();
    }

    if (body.company) {
      waitlistEntry.company = body.company.trim();
    }

    // Agregar a la lista de espera
    const result = await WaitlistService.addToWaitlist(waitlistEntry as WaitlistEntry);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    // Enviar email de bienvenida (no bloquear la respuesta)
    const lang = body.source === 'iniciar-sesion' || body.source === 'registro' ? 'es' : 'en';
    EmailService.sendWelcomeEmail(waitlistEntry.email!, waitlistEntry.name, lang)
      .then(emailResult => {
        if (!emailResult.success) {
          console.error('Error al enviar email de bienvenida:', emailResult.error);
        } else {
          console.log(`✅ Proceso de email completado para: ${waitlistEntry.email}`);
        }
      })
      .catch(error => {
        console.error('Error inesperado al enviar email:', error);
        // No fallar la operación principal si el email falla
        console.log(`⚠️ El usuario ${waitlistEntry.email} fue agregado a la lista pero el email falló`);
      });

    // Responder con éxito
    return NextResponse.json({
      success: true,
      message: '¡Gracias por unirte a nuestra lista de espera! Te hemos enviado un email de confirmación.',
      id: result.id
    });

  } catch (error) {
    console.error('Error en API waitlist:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error interno del servidor. Por favor, intenta nuevamente.' 
      },
      { status: 500 }
    );
  }
}

// GET para obtener estadísticas (protegido con API key)
export async function GET(request: NextRequest) {
  try {
    // Verificar API key para acceso administrativo
    const apiKey = request.headers.get('x-api-key');
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Obtener estadísticas
    const stats = await WaitlistService.getStats();

    return NextResponse.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener estadísticas' 
      },
      { status: 500 }
    );
  }
}
import { Resend } from 'resend';

/**
 * SERVICIO DE EMAIL CON RESEND
 * 
 * Resend ofrece 1000 emails/mes gratis
 * Documentación: https://resend.com/docs
 * 
 * ALTERNATIVAS GRATUITAS:
 * 
 * 1. EmailJS (https://www.emailjs.com)
 *    - 200 emails/mes gratis
 *    - No requiere backend, funciona desde el frontend
 * 
 * 2. Firebase Cloud Functions + Nodemailer
 *    - Usar Gmail SMTP con límites de Gmail
 *    - Requiere configurar Cloud Functions
 * 
 * 3. Simplemente guardar en Firebase sin enviar emails
 *    - La opción más simple para empezar
 *    - Los emails se pueden enviar manualmente más tarde
 */

// Inicializar Resend solo si hay API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export class EmailService {
  private static FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@infraux.com';
  private static FROM_NAME = 'InfraUX';

  /**
   * Envía un email de bienvenida a la lista de espera
   */
  static async sendWelcomeEmail(to: string, name?: string, lang: 'es' | 'en' = 'es'): Promise<{ success: boolean; error?: string }> {
    const firstName = name?.split(' ')[0] || (lang === 'es' ? 'amigo' : 'friend');
    
    const content = {
      es: {
        subject: '¡Bienvenido a la lista de espera de InfraUX! 🚀',
        title: 'Bienvenido a InfraUX',
        greeting: `¡Hola ${firstName}! 👋`,
        thankYou: `Gracias por unirte a la lista de espera de <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span>`,
        excited: '¡Estamos emocionados de tenerte con nosotros!',
        firstStep: 'Has dado el primer paso para revolucionar la forma en que gestionas tu infraestructura cloud.',
        whatsNext: '¿Qué sigue?',
        nextSteps: [
          `Te notificaremos tan pronto como <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span> esté disponible`,
          'Recibirás acceso anticipado y ofertas exclusivas',
          'Serás parte de nuestra comunidad de early adopters'
        ],
        meanwhile: 'Mientras tanto...',
        followUs: 'Puedes seguirnos en nuestras redes sociales para estar al día con las últimas novedades:',
        followButton: 'Síguenos en X',
        questions: 'Si tienes alguna pregunta, no dudes en responder a este email.',
        seeYou: '¡Nos vemos pronto!',
        team: `El equipo de <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span>`,
        rights: `© 2025 <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span>. Todos los derechos reservados.`,
        sentTo: `Este email fue enviado a ${to}`
      },
      en: {
        subject: 'Welcome to the InfraUX waitlist! 🚀',
        title: 'Welcome to InfraUX',
        greeting: `Hi ${firstName}! 👋`,
        thankYou: `Thanks for joining the <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span> waitlist`,
        excited: "We're excited to have you with us!",
        firstStep: "You've taken the first step to revolutionize how you manage your cloud infrastructure.",
        whatsNext: "What's next?",
        nextSteps: [
          `We'll notify you as soon as <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span> is available`,
          'You will receive early access and exclusive offers',
          "You'll be part of our early adopters community"
        ],
        meanwhile: 'Meanwhile...',
        followUs: 'You can follow us on our social networks to stay up to date with the latest news:',
        followButton: 'Follow us on X',
        questions: 'If you have any questions, feel free to reply to this email.',
        seeYou: 'See you soon!',
        team: `The <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span> team`,
        rights: `© 2025 <span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span>. All rights reserved.`,
        sentTo: `This email was sent to ${to}`
      }
    };

    const t = content[lang];

    const emailContent = {
      to,
      subject: t.subject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${t.title}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #000000; background-color: #ffffff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; }
            .header { padding: 40px; text-align: center; border-bottom: 1px solid #e0e0e0; }
            .header h1 { font-size: 2.5em; margin: 0; color: #000000; }
            .content { padding: 20px 40px; }
            .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 0.8em; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1><span style="font-weight: bold;">Infra</span><span style="color: #10B981;">UX</span></h1>
            </div>
            <div class="content">
              <h2>${t.greeting}</h2>
              <p>${t.thankYou}</p>
              <p>${t.excited}</p>
              <p>${t.firstStep}</p>
              
              <h3>${t.whatsNext}</h3>
              <ul>
                ${t.nextSteps.map(step => `<li>${step}</li>`).join('')}
              </ul>
              
              <p>${t.questions}</p>
              
              <p>${t.seeYou}</p>
              <p><strong>${t.team}</strong></p>
            </div>
            <div class="footer">
              <p>${t.rights}</p>
              <p>${t.sentTo}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
${t.greeting}

${t.thankYou.replace(/<[^>]*>/g, '')}

${t.excited}

${t.firstStep}

${t.whatsNext}
${t.nextSteps.map(step => `- ${step.replace(/<[^>]*>/g, '')}`).join('\n')}

${t.meanwhile}
${t.followUs}

${t.questions}

${t.seeYou}
${t.team.replace(/<[^>]*>/g, '')}

${t.rights.replace(/<[^>]*>/g, '')}
${t.sentTo}
      `
    };

    // Si no hay servicio de email configurado, solo loguear
    if (!resend) {
      console.log('📧 Email que se habría enviado (servicio no configurado):');
      console.log('Para:', emailContent.to);
      console.log('Asunto:', emailContent.subject);
      console.log('Nombre:', firstName);
      console.log('---');
      console.log('Nota: Configura RESEND_API_KEY en .env para enviar emails reales');
      return { success: true };
    }

    try {
      const { data, error } = await resend.emails.send({
        from: `${this.FROM_NAME} <${this.FROM_EMAIL}>`,
        to: emailContent.to,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text
      });

      if (error) {
        console.error('Error al enviar email con Resend:', error);
        return { 
          success: false, 
          error: 'Error al enviar el email de bienvenida' 
        };
      }

      console.log('✅ Email enviado exitosamente:', data);
      return { success: true };
    } catch (error) {
      console.error('Error al enviar email:', error);
      return { 
        success: false, 
        error: 'Error al enviar el email de bienvenida' 
      };
    }
  }

  /**
   * Envía un email personalizado
   */
  static async sendEmail(template: EmailTemplate): Promise<{ success: boolean; error?: string }> {
    // Si no hay servicio de email configurado, solo loguear
    if (!resend) {
      console.log('📧 Email que se habría enviado (servicio no configurado):');
      console.log('Para:', template.to);
      console.log('Asunto:', template.subject);
      console.log('---');
      console.log('Nota: Configura RESEND_API_KEY en .env para enviar emails reales');
      return { success: true };
    }

    try {
      const { data, error } = await resend.emails.send({
        from: `${this.FROM_NAME} <${this.FROM_EMAIL}>`,
        to: template.to,
        subject: template.subject,
        html: template.html,
        text: template.text || template.html.replace(/<[^>]*>/g, '')
      });

      if (error) {
        console.error('Error al enviar email con Resend:', error);
        return { 
          success: false, 
          error: 'Error al enviar el email' 
        };
      }

      console.log('✅ Email enviado exitosamente:', data);
      return { success: true };
    } catch (error) {
      console.error('Error al enviar email:', error);
      return { 
        success: false, 
        error: 'Error al enviar el email' 
      };
    }
  }
}
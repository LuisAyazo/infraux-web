'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import Modal from '@/components/Modal';
import {
  RocketLaunchIcon,
  CalendarDaysIcon,
  ClockIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function PruebaGratisPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error' | 'info'>('success');
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [userPosition, setUserPosition] = useState<number | undefined>();
  
  // Calcular días hasta el lanzamiento
  const launchDate = new Date('2025-07-27');
  const today = new Date();
  const daysUntilLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    // Animación de entrada
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Enviar datos a la API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'prueba-gratis'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Generar una posición aleatoria para mostrar
        const position = Math.floor(Math.random() * 1000) + 2000;
        setUserPosition(position);
        setModalType('success');
        setModalTitle(language === 'es' ? '¡Bienvenido a InfraUX! 🎉' : 'Welcome to InfraUX! 🎉');
        setModalMessage(
          language === 'es'
            ? 'Te has unido exitosamente a nuestra lista de espera. Prepárate para revolucionar tu infraestructura cloud con nosotros.'
            : "You've successfully joined our waitlist. Get ready to revolutionize your cloud infrastructure with us."
        );
        setShowModal(true);
      } else {
        setModalType('error');
        setModalTitle(language === 'es' ? 'Error al procesar tu solicitud' : 'Error processing your request');
        setModalMessage(result.error || (language === 'es' ? 'Por favor, intenta nuevamente.' : 'Please try again.'));
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setModalType('error');
      setModalTitle(language === 'es' ? 'Error de conexión' : 'Connection error');
      setModalMessage(
        language === 'es'
          ? 'No pudimos conectar con nuestros servidores. Por favor, verifica tu conexión e intenta nuevamente.'
          : 'Could not connect to our servers. Please check your connection and try again.'
      );
      setShowModal(true);
    }
  };

  const content = {
    es: {
      title: "¡Estamos preparando algo increíble!",
      subtitle: "InfraUX está en fase beta",
      description: "Estamos trabajando arduamente para crear la mejor plataforma de infraestructura como código visual. Únete a nuestra lista de espera y sé de los primeros en experimentar el futuro de DevOps.",
      launchLabel: "Lanzamiento oficial",
      daysLeft: "días restantes",
      benefitsTitle: "Beneficios para Early Adopters",
      benefits: [
        "50% de descuento de por vida en todos los planes",
        "Acceso prioritario a nuevas funcionalidades",
        "Soporte directo del equipo fundador",
        "Influye en el desarrollo del producto",
        "Acceso a la comunidad exclusiva de beta testers"
      ],
      emailPlaceholder: "tu@email.com",
      submitButton: "Únete a la lista de espera",
      successTitle: "¡Gracias por tu interés!",
      successMessage: "Te hemos agregado a nuestra lista de espera. Te notificaremos tan pronto como lancemos la beta.",
      backToHome: "Volver al inicio"
    },
    en: {
      title: "We're building something amazing!",
      subtitle: "InfraUX is in beta phase",
      description: "We're working hard to create the best visual infrastructure as code platform. Join our waitlist and be among the first to experience the future of DevOps.",
      launchLabel: "Official launch",
      daysLeft: "days left",
      benefitsTitle: "Early Adopter Benefits",
      benefits: [
        "50% lifetime discount on all plans",
        "Priority access to new features",
        "Direct support from the founding team",
        "Influence product development",
        "Access to exclusive beta testers community"
      ],
      emailPlaceholder: "your@email.com",
      submitButton: "Join the waitlist",
      successTitle: "Thank you for your interest!",
      successMessage: "We've added you to our waitlist. We'll notify you as soon as we launch the beta.",
      backToHome: "Back to home"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      
      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        title={modalTitle}
        message={modalMessage}
        position={userPosition}
        onRetry={modalType === 'error' ? handleSubmit : undefined}
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className={`max-w-4xl w-full transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Botón de regreso */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>{t.backToHome}</span>
          </Link>

          {/* Contenido principal */}
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Header con Zenix */}
              <div className="text-center mb-12">
                <div className="relative inline-block mb-8">
                  <Image
                    src="/images/zenix-hero.png"
                    alt="Zenix"
                    width={200}
                    height={235}
                    className="mx-auto drop-shadow-2xl animate-bounce"
                    style={{ animationDuration: '3s' }}
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/10 rounded-full blur-xl" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  {t.title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
                  {t.subtitle}
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  {t.description}
                </p>
              </div>

              {/* Contador de lanzamiento */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 mb-12 text-white">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <CalendarDaysIcon className="h-8 w-8" />
                    <div>
                      <p className="text-sm text-emerald-100">{t.launchLabel}</p>
                      <p className="text-xl font-bold">27 {language === 'es' ? 'de julio' : 'July'}, 2025</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-white/30" />
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-8 w-8" />
                    <div>
                      <p className="text-3xl font-black">{daysUntilLaunch}</p>
                      <p className="text-sm text-emerald-100">{t.daysLeft}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario o mensaje de éxito */}
              {!isSubmitted ? (
                <div className="mb-12">
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <EnvelopeIcon className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-800/50 backdrop-blur-sm"
                          placeholder={t.emailPlaceholder}
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {t.submitButton}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="mb-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                    <CheckCircleIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {t.successTitle}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {t.successMessage}
                  </p>
                </div>
              )}

              {/* Beneficios */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <SparklesIcon className="h-8 w-8 text-emerald-500" />
                  {t.benefitsTitle}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
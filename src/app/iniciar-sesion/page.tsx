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
  EnvelopeIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserIcon
} from '@heroicons/react/24/outline';

export default function IniciarSesionPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBetaMessage, setShowBetaMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error' | 'info'>('info');
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  
  const launchDate = new Date('2025-07-27');
  const today = new Date();
  const daysUntilLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    setTimeout(() => setShowBetaMessage(true), 500);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name,
          source: 'iniciar-sesion',
          lang: 'es'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setModalType('success');
        setModalTitle('¡Te tenemos cubierto! 🎉');
        setModalMessage('Te notificaremos tan pronto como tu acceso esté disponible. Mientras tanto, explora nuestra documentación y únete a la comunidad.');
        setShowModal(true);
      } else {
        setModalType('error');
        setModalTitle('Error al procesar tu solicitud');
        setModalMessage(result.error || 'Por favor, intenta nuevamente.');
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setModalType('error');
      setModalTitle('Error de conexión');
      setModalMessage('No pudimos conectar con nuestros servidores. Por favor, verifica tu conexión e intenta nuevamente.');
      setShowModal(true);
    }
  };

  const t = {
    title: "Bienvenido de vuelta",
    betaTitle: "¡Estamos terminando la beta!",
    betaSubtitle: "Tu acceso estará disponible muy pronto",
    description: "Mientras finalizamos los últimos detalles de InfraUX, únete a nuestra lista de espera para ser notificado cuando tu cuenta esté lista.",
    launchLabel: "Lanzamiento",
    daysLeft: "días",
    whyWaitTitle: "¿Por qué la espera?",
    whyWaitItems: [
      "Estamos implementando medidas de seguridad de nivel empresarial",
      "Optimizando la plataforma para manejar miles de usuarios simultáneos",
      "Finalizando integraciones con AWS, GCP y Azure",
      "Preparando documentación y tutoriales completos"
    ],
    namePlaceholder: "Juan Pérez",
    emailPlaceholder: "tu@email.com",
    submitButton: "Notifícame cuando esté listo",
    successTitle: "¡Te tenemos cubierto!",
    successMessage: "Te notificaremos tan pronto como tu acceso esté disponible. Mientras tanto, explora nuestra documentación y únete a la comunidad.",
    backToHome: "Volver al inicio",
    exploreDemo: "Ver demo",
    joinCommunity: "Unirse a la comunidad"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      
      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        title={modalTitle}
        message={modalMessage}
      />
      
      <div className="relative z-10 flex min-h-screen">
        {/* Lado izquierdo - Mensaje temporal */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {/* Logo y título */}
            <div className="text-center">
              <Link href="/" className="inline-block mb-8">
                <span className="text-4xl">
                  <span className="font-bold">Infra</span>
                  <span className="text-emerald-500">UX</span>
                </span>
              </Link>
              
              <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                {t.title}
              </h1>
            </div>

            {/* Mensaje de Beta animado */}
            <div className={`transform transition-all duration-1000 ${showBetaMessage ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <RocketLaunchIcon className="h-8 w-8" />
                    <h3 className="text-xl font-bold">{t.betaTitle}</h3>
                  </div>
                  <p className="text-emerald-50 mb-4">
                    {t.betaSubtitle}
                  </p>
                  <p className="text-emerald-50 mb-4">
                    {t.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-5 w-5" />
                      <span className="font-semibold">{t.launchLabel}: 27 de julio, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span className="font-semibold">{daysUntilLaunch} {t.daysLeft}</span>
                    </div>
                  </div>
                </div>
                
                {/* Decoración animada */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>

            {/* Formulario de notificación o mensaje de éxito */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-800/50 backdrop-blur-sm transition-all"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-800/50 backdrop-blur-sm transition-all"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full flex justify-center items-center gap-3 py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300"
                >
                  {t.submitButton}
                </button>
              </form>
            ) : (
              <div className="mt-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 text-center">
                  <CheckCircleIcon className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {t.successTitle}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {t.successMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Enlaces adicionales */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo" 
                className="text-center text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                {t.exploreDemo} →
              </Link>
              <Link 
                href="/comunidad" 
                className="text-center text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                {t.joinCommunity} →
              </Link>
            </div>

            {/* Botón de regreso */}
            <div className="text-center">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                <span>{t.backToHome}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Lado derecho - Ilustración con Zenix */}
        <div className="hidden lg:block relative flex-1 bg-gradient-to-br from-emerald-500 to-teal-600">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative h-full flex items-center justify-center p-12">
            <div className="text-center text-white max-w-lg">
              {/* Zenix animado */}
              <div className="mb-8 relative">
                <Image
                  src="/images/zenix-hero.png"
                  alt="Zenix esperando"
                  width={300}
                  height={353}
                  className="mx-auto drop-shadow-2xl animate-bounce"
                  style={{ animationDuration: '3s' }}
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/20 rounded-full blur-xl" />
              </div>
              
              <h2 className="text-4xl font-black mb-4">
                {t.whyWaitTitle}
              </h2>
              
              {/* Lista de razones */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <ul className="space-y-3 text-left">
                  {t.whyWaitItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ShieldCheckIcon className="h-6 w-6 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span className="text-emerald-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Badge de seguridad */}
              <div className="mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <LockClosedIcon className="h-5 w-5" />
                <span className="font-semibold">
                  Seguridad de nivel empresarial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
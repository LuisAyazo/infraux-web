'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  ArrowRightIcon,
  SparklesIcon,
  CalendarDaysIcon,
  RocketLaunchIcon,
  ClockIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  GiftIcon,
  FireIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function RegistroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [registeredCount, setRegisteredCount] = useState(2847);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error' | 'info'>('success');
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [userPosition, setUserPosition] = useState<number | undefined>();
  
  // Calcular días hasta el lanzamiento
  const launchDate = new Date('2025-07-27');
  const today = new Date();
  const daysUntilLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Contador animado de usuarios registrados
  useEffect(() => {
    const interval = setInterval(() => {
      setRegisteredCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    try {
      // Enviar datos a la API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          company: formData.company,
          source: 'registro',
          lang: 'es'
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Calcular posición aproximada basada en el contador actual
        const position = registeredCount + 1;
        setUserPosition(position);
        setModalType('success');
        setModalTitle('¡Bienvenido a la revolución cloud! 🚀');
        setModalMessage(`¡Felicidades! Eres parte de algo especial. Te has unido exitosamente a la lista de espera de InfraUX y pronto serás de los primeros en experimentar el futuro de la infraestructura visual. Prepárate para transformar la manera en que construyes y gestionas tu infraestructura cloud. ¡Pronto recibirás un email con todos los detalles y beneficios exclusivos para early adopters como tú!`);
        setShowModal(true);
      } else {
        setModalType('error');
        setModalTitle('No pudimos completar tu registro');
        setModalMessage(result.error || 'Hubo un problema al procesar tu solicitud. Por favor, verifica tu información e intenta nuevamente.');
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setModalType('error');
      setModalTitle('Error de conexión');
      setModalMessage('No pudimos conectar con nuestros servidores. Por favor, verifica tu conexión a internet e intenta nuevamente.');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: GiftIcon, text: '50% de descuento de por vida', highlight: true },
    { icon: RocketLaunchIcon, text: 'Acceso prioritario al lanzamiento' },
    { icon: HeartIcon, text: 'Soporte VIP del equipo fundador' },
    { icon: SparklesIcon, text: 'Funciones exclusivas beta' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-black dark:via-slate-950 dark:to-purple-950/10 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      
      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        title={modalTitle}
        message={modalMessage}
        position={userPosition}
        onRetry={modalType === 'error' ? () => handleSubmit : undefined}
      />
      
      <div className="relative z-10 flex min-h-screen">
        {/* Lado izquierdo - Zenix y beneficios */}
        <div className="hidden lg:flex relative flex-1 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative flex-1 flex items-center justify-center p-12">
            <div className="text-center text-white max-w-lg">
              {/* Contador de usuarios */}
              <div className="mb-4 inline-flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <FireIcon className="h-6 w-6 text-yellow-300 animate-pulse" />
                <span className="text-lg font-bold">
                  {registeredCount.toLocaleString()} personas en la lista de espera
                </span>
              </div>
              
              {/* Zenix con animación especial */}
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse" />
                <Image
                  src="/images/zenix-pricing.png"
                  alt="Zenix celebrando"
                  width={240}
                  height={240}
                  className="relative mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h2 className="text-3xl font-black mb-2">
                ¡Únete a la revolución cloud!
              </h2>
              <p className="text-lg text-purple-50 mb-4">
                Sé parte de los primeros en experimentar el futuro de la infraestructura visual
              </p>
              
              {/* Timeline hasta el lanzamiento */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Progreso hacia el lanzamiento</span>
                  <span className="text-sm font-bold">{Math.round((30 - daysUntilLaunch) / 30 * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.round((30 - daysUntilLaunch) / 30 * 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span className="font-semibold">{daysUntilLaunch} días para el lanzamiento</span>
                </div>
              </div>
              
              {/* Beneficios early adopter */}
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                      benefit.highlight 
                        ? 'bg-yellow-400/20 border border-yellow-400/30 transform scale-105' 
                        : 'bg-white/10 border border-white/20'
                    }`}
                  >
                    {React.createElement(benefit.icon, { 
                      className: `h-6 w-6 ${benefit.highlight ? 'text-yellow-300' : 'text-white'}` 
                    })}
                    <span className={`font-medium ${benefit.highlight ? 'text-yellow-100' : ''}`}>
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lado derecho - Formulario */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-md w-full space-y-6">
            {/* Logo y título */}
            <div className="text-center">
              <Link href="/" className="inline-block mb-8">
                <h2 className="text-4xl">
                  <span className="font-bold">Infra</span>
                  <span className="text-emerald-500">UX</span>
                </h2>
              </Link>
              
              <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                Únete a la beta privada
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Sé de los primeros en transformar tu infraestructura
              </p>
            </div>

            {/* Indicador de pasos */}
            <div className="flex items-center justify-center space-x-2">
              {[1, 2].map((step) => (
                <div
                  key={step}
                  className={`h-2 transition-all duration-300 ${
                    step <= currentStep
                      ? 'w-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 rounded-full'
                  }`}
                />
              ))}
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setCurrentStep(1)}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-800/50 backdrop-blur-sm transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
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
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setCurrentStep(2)}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-800/50 backdrop-blur-sm transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Empresa (opcional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BuildingOfficeIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-800/50 backdrop-blur-sm transition-all"
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-slate-700 dark:text-slate-300">
                  Acepto los{' '}
                  <Link href="/terminos-y-condiciones" className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
                    términos y condiciones
                  </Link>{' '}
                  y la{' '}
                  <Link href="/politica-de-privacidad" className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
                    política de privacidad
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center items-center gap-3 py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registrándote...
                    </>
                  ) : (
                    <>
                      Unirme a la beta
                      <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  ¿Ya tienes una cuenta?{' '}
                  <Link href="/login" className="font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300">
                    Inicia sesión aquí
                  </Link>
                </span>
              </div>
            </form>

            {/* Mensaje móvil sobre beneficios */}
            <div className="lg:hidden mt-6 p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
              <p className="text-sm text-purple-800 dark:text-purple-200 font-medium text-center">
                🎁 Obtén 50% de descuento de por vida al unirte ahora
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
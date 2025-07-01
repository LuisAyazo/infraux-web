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

export default function LoginClient() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBetaMessage, setShowBetaMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error' | 'info'>('info');
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    // Show beta message automatically after 5 seconds if not submitted
    const timer = setTimeout(() => {
      if (!isSubmitted) {
        setShowBetaMessage(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      setModalType('error');
      setModalTitle(language === 'es' ? 'Campos requeridos' : 'Required fields');
      setModalMessage(language === 'es' ? 'Por favor, completa todos los campos.' : 'Please fill in all fields.');
      setShowModal(true);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setModalType('success');
      setModalTitle(language === 'es' ? '¡Registro exitoso!' : 'Registration successful!');
      setModalMessage(language === 'es' 
        ? 'Te hemos enviado un email con las instrucciones para acceder.' 
        : 'We\'ve sent you an email with instructions to access.');
      setShowModal(true);
    } catch (error) {
      setModalType('error');
      setModalTitle(language === 'es' ? 'Error' : 'Error');
      setModalMessage(language === 'es' 
        ? 'Hubo un problema al procesar tu solicitud.' 
        : 'There was a problem processing your request.');
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center">
            <Image 
              src="/logo.svg" 
              alt="InfraUX" 
              width={40} 
              height={40}
              className="mr-3"
            />
            <span className="text-2xl font-bold text-gray-900">InfraUX</span>
          </Link>
          
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {language === 'es' ? 'Accede a tu cuenta' : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {language === 'es' ? 'O' : 'Or'}{' '}
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
              {language === 'es' ? 'crea una cuenta nueva' : 'create a new account'}
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {language === 'es' ? 'Nombre completo' : 'Full name'}
              </label>
              <div className="mt-1 relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                />
                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {language === 'es' ? 'Correo electrónico' : 'Email address'}
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                />
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          </div>

          {/* Beta Notice */}
          {showBetaMessage && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <SparklesIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-blue-800">
                    {language === 'es' ? '¡Versión Beta!' : 'Beta Version!'}
                  </p>
                  <p className="text-blue-700 mt-1">
                    {language === 'es' 
                      ? 'InfraUX está en fase beta. Regístrate para acceso anticipado y ayúdanos a mejorar.' 
                      : 'InfraUX is in beta phase. Sign up for early access and help us improve.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitted}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitted ? (
                <>
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  {language === 'es' ? 'Registrado' : 'Registered'}
                </>
              ) : (
                <>
                  <RocketLaunchIcon className="h-5 w-5 mr-2" />
                  {language === 'es' ? 'Solicitar acceso' : 'Request access'}
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-green-800">
                    {language === 'es' ? '¡Solicitud enviada!' : 'Request submitted!'}
                  </p>
                  <p className="text-green-700 mt-1">
                    {language === 'es' 
                      ? 'Te contactaremos pronto con los detalles de acceso a la beta.' 
                      : 'We\'ll contact you soon with beta access details.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mt-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                {language === 'es' ? 'Lo que obtienes con InfraUX:' : 'What you get with InfraUX:'}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-sm text-gray-700">
                  {language === 'es' ? 'Editor visual drag & drop' : 'Visual drag & drop editor'}
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-sm text-gray-700">
                  {language === 'es' ? 'Generación automática de código' : 'Automatic code generation'}
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-sm text-gray-700">
                  {language === 'es' ? 'Soporte multi-cloud (AWS, Azure, GCP)' : 'Multi-cloud support (AWS, Azure, GCP)'}
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-sm text-gray-700">
                  {language === 'es' ? 'Colaboración en tiempo real' : 'Real-time collaboration'}
                </span>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </Link>
          </div>
        </form>

        {/* Security */}
        <div className="text-center">
          <div className="flex items-center justify-center text-sm text-gray-500">
            <ShieldCheckIcon className="h-4 w-4 mr-1" />
            {language === 'es' ? 'Tus datos están seguros y protegidos' : 'Your data is secure and protected'}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        title={modalTitle}
        message={modalMessage}
      />
    </div>
  );
}

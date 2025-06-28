'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  XMarkIcon, 
  CheckCircleIcon, 
  ExclamationCircleIcon,
  InformationCircleIcon,
  SparklesIcon,
  ShareIcon,
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error' | 'info';
  title?: string;
  message?: string;
  position?: number;
  onRetry?: () => void;
  customContent?: React.ReactNode;
}

export default function Modal({ 
  isOpen, 
  onClose, 
  type, 
  title, 
  message, 
  position,
  onRetry,
  customContent 
}: ModalProps) {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      if (type === 'success') {
        setTimeout(() => setShowConfetti(true), 300);
      }
    } else {
      setShowModal(false);
      setShowConfetti(false);
    }
  }, [isOpen, type]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShare = (platform: string) => {
    const text = language === 'es' 
      ? `¡Me uní a la lista de espera de InfraUX! 🚀 Soy el #${position} en la fila para revolucionar mi infraestructura cloud.`
      : `I just joined the InfraUX waitlist! 🚀 I'm #${position} in line to revolutionize my cloud infrastructure.`;
    
    const url = 'https://infraux.com';
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  const content = {
    es: {
      success: {
        defaultTitle: '¡Felicitaciones! 🎉',
        defaultMessage: 'Te has registrado exitosamente en la lista de espera de <span className="font-bold">Infra</span><span className="text-emerald-500">UX</span>.',
        positionMessage: '¡Eres el número',
        positionMessageEnd: 'en la lista!',
        shareTitle: 'Comparte tu logro',
        shareButton: 'Compartir en',
        closeButton: 'Continuar'
      },
      error: {
        defaultTitle: 'Ups, algo salió mal',
        defaultMessage: 'No pudimos procesar tu solicitud en este momento.',
        retryButton: 'Intentar de nuevo',
        contactMessage: '¿Necesitas ayuda?',
        contactButton: 'Contactar soporte',
        closeButton: 'Cerrar'
      },
      info: {
        defaultTitle: 'Información',
        defaultMessage: 'Información importante para ti.',
        closeButton: 'Entendido'
      }
    },
    en: {
      success: {
        defaultTitle: 'Congratulations! 🎉',
        defaultMessage: 'You have successfully registered for the <span className="font-bold">Infra</span><span className="text-emerald-500">UX</span> waitlist.',
        positionMessage: "You're number",
        positionMessageEnd: 'on the list!',
        shareTitle: 'Share your achievement',
        shareButton: 'Share on',
        closeButton: 'Continue'
      },
      error: {
        defaultTitle: 'Oops, something went wrong',
        defaultMessage: "We couldn't process your request at this time.",
        retryButton: 'Try again',
        contactMessage: 'Need help?',
        contactButton: 'Contact support',
        closeButton: 'Close'
      },
      info: {
        defaultTitle: 'Information',
        defaultMessage: 'Important information for you.',
        closeButton: 'Got it'
      }
    }
  };

  const t = content[language];

  if (!mounted) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBackdropClick}
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Confetti para success */}
        {type === 'success' && showConfetti && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                <div
                  className={`w-3 h-3 ${
                    i % 4 === 0 ? 'bg-emerald-500' :
                    i % 4 === 1 ? 'bg-emerald-400' :
                    i % 4 === 2 ? 'bg-emerald-600' :
                    'bg-yellow-500'
                  } ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div
            className={`relative w-full max-w-lg transform transition-all duration-500 ${
              showModal 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-8 opacity-0 scale-95'
            }`}
          >
            {/* Glassmorphism container */}
            <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800/50">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-emerald-400/20 to-emerald-600/20 opacity-50" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <XMarkIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                </button>

                {customContent || (
                  <>
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative ${type === 'success' ? 'animate-bounce-slow' : ''}`}>
                        <div className={`absolute inset-0 ${
                          type === 'success' ? 'bg-emerald-500' : 
                          type === 'error' ? 'bg-red-500' : 
                          'bg-blue-500'
                        } rounded-full blur-xl opacity-50 animate-pulse`} />
                        <div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${
                          type === 'success' ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' : 
                          type === 'error' ? 'bg-gradient-to-br from-red-400 to-red-600' : 
                          'bg-gradient-to-br from-blue-400 to-blue-600'
                        }`}>
                          {type === 'success' && <CheckCircleIcon className="h-12 w-12 text-white" />}
                          {type === 'error' && <ExclamationCircleIcon className="h-12 w-12 text-white" />}
                          {type === 'info' && <InformationCircleIcon className="h-12 w-12 text-white" />}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-4">
                      {title || t[type].defaultTitle}
                    </h2>

                    {/* Message */}
                    <div className="text-center text-slate-600 dark:text-slate-400 mb-6">
                      {type === 'success' && !message ? (
                        <p dangerouslySetInnerHTML={{ __html: t[type].defaultMessage }} />
                      ) : (
                        <p>{message || t[type].defaultMessage}</p>
                      )}
                    </div>

                    {/* Success specific content */}
                    {type === 'success' && position && (
                      <>
                        {/* Position badge */}
                        <div className="flex justify-center mb-6">
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white shadow-lg">
                            <SparklesIcon className="h-6 w-6" />
                            <span className="text-lg font-bold">
                              {t.success.positionMessage} #{position} {t.success.positionMessageEnd}
                            </span>
                          </div>
                        </div>

                      </>
                    )}

                    {/* Error specific content */}
                    {type === 'error' && (
                      <div className="space-y-4 mb-6">
                        {onRetry && (
                          <button
                            onClick={onRetry}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-xl transition-all duration-300"
                          >
                            <ArrowPathIcon className="h-5 w-5" />
                            {t.error.retryButton}
                          </button>
                        )}
                        <div className="text-center">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            {t.error.contactMessage}
                          </p>
                          <a
                            href="mailto:soporte@infraux.com"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
                          >
                            <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                            {t.error.contactButton}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Action button */}
                    <button
                      onClick={onClose}
                      className={`w-full px-6 py-3 font-bold rounded-xl transition-all duration-300 ${
                        type === 'success' 
                          ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white' 
                          : type === 'error'
                          ? 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                          : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white'
                      }`}
                    >
                      {t[type].closeButton}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );

  return createPortal(modalContent, document.body);
}
import React, { useState } from 'react';
import { CheckIcon } from './Icons';
import { CONFIG } from '../config';
import { UpgradeModal } from './UpgradeModal';

export const OfferSection = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const trackCheckout = (value) => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        value: value,
        currency: 'USD'
      });
    }
  };

  return (
    <section id="ofertas" className="bg-boda-blue-light/50 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        
        {/* Título Principal */}
        <h3 className="text-2xl md:text-3xl font-black text-boda-wine text-center uppercase tracking-tight mb-2">
          ELIGE LA MEJOR OFERTA PARA TI
        </h3>
        <p className="text-center text-xs md:text-sm text-boda-text-muted mb-10 max-w-md mx-auto">
          Comienza hoy mismo a planear tu boda sin deudas y con total organización.
        </p>

        {/* Grade de Ofertas */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-2xl mx-auto">
          
          {/* Card Plano Básico */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-card relative hover:shadow-md transition-all duration-300">
            <div>
              <h4 className="text-xl font-extrabold text-boda-text-dark mt-1 mb-2">PLAN BÁSICO</h4>
              
              {/* Imagem da capa essencial */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/capa1.webp" 
                  alt="Boda Económica Básico" 
                  className="w-full max-w-[330px] h-auto drop-shadow-md opacity-90 transition-transform duration-300 hover:scale-103"
                />
              </div>
              
              <ul className="space-y-2.5 mb-6 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">Ebook: Boda Económica — Versión Esencial</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">1 año de acceso</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Preço Básico */}
              <div className="border-t border-gray-100 pt-4 mb-4 text-center">
                <span className="text-[10px] text-boda-text-muted uppercase tracking-wider block">POR SÓLO</span>
                <div className="flex items-baseline justify-center text-boda-green font-black my-1">
                  <span className="text-xl font-bold mr-0.5">US$</span>
                  <span className="text-5xl leading-none">5</span>
                </div>
                <span className="text-[10px] text-boda-text-muted font-medium block">Pago único</span>
              </div>

              {/* Botão Plano Básico */}
              <button 
                onClick={() => setIsUpgradeModalOpen(true)}
                className="block w-full py-3 bg-gray-100 hover:bg-gray-200 text-boda-text-dark font-extrabold text-center text-xs md:text-sm rounded-xl uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                QUIERO ESTA OPCIÓN
              </button>
            </div>
          </div>

          {/* Card Plano Completo - MAIS DESTACADO */}
          <div className="bg-white border-2 border-boda-wine rounded-2xl p-6 flex flex-col justify-between shadow-premium relative transform md:scale-105 transition-all duration-300">
            {/* Selo: EL MÁS VENDIDO */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-boda-wine text-white font-extrabold text-[10px] md:text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
              🌟 EL MÁS VENDIDO
            </div>

            <div>
              <h4 className="text-xl font-black text-boda-wine mt-1 mb-2">PLAN COMPLETO</h4>
              
              {/* Imagem da capa completa do kit */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/todos.webp" 
                  alt="Boda Económica Completo" 
                  className="w-full max-w-[360px] h-auto drop-shadow-lg transition-transform duration-300 hover:scale-103"
                />
              </div>
              
              <ul className="space-y-2.5 mb-6 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="font-semibold text-boda-text-dark">Ebook completo: Boda Económica</span>
                </li>
                <li className="flex items-start gap-2 text-boda-text-dark">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span>Checklist + Planner de la Novia (Bono)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">Lista de enseres para el nuevo hogar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">Guía de paleta de colores en minutos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">Guía de la fecha perfecta</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">Todo sobre matrimonio civil (Colombia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark font-medium">Bono sorpresa de ahorro</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">Acceso de por vida</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-text-dark">Actualizaciones incluidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-boda-green mt-0.5 flex-shrink-0" />
                  <span className="text-boda-green font-bold">7 días de garantía total</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Preço Completo */}
              <div className="border-t border-gray-100 pt-4 mb-4 text-center">
                <span className="text-[10px] text-boda-text-muted uppercase tracking-wider block">POR SÓLO</span>
                <div className="flex items-baseline justify-center text-boda-green font-black my-1">
                  <span className="text-xl font-bold mr-0.5">US$</span>
                  <span className="text-5xl md:text-6xl leading-none">12,90</span>
                </div>
                <span className="text-[9px] text-boda-text-muted font-medium block">
                  o cuotas según plataforma
                </span>
              </div>

              {/* Botão Plano Completo */}
              <a 
                href={CONFIG.LINK_CHECKOUT_COMPLETO}
                onClick={() => trackCheckout(12.90)}
                className="block w-full py-4 bg-boda-accent hover:bg-yellow-400 text-boda-wine font-black text-center text-sm md:text-base rounded-xl uppercase tracking-wider transition-all duration-200 border-b-4 border-yellow-600 shadow-md pulse-custom"
              >
                ¡SÍ! QUIERO EL PLAN COMPLETO
              </a>
            </div>
          </div>

        </div>

      </div>
      <UpgradeModal 
        isOpen={isUpgradeModalOpen} 
        onClose={() => setIsUpgradeModalOpen(false)} 
      />
    </section>
  );
};

import React, { useEffect } from 'react';
import { CheckIcon } from './Icons';
import { CONFIG } from '../config';

export const UpgradeModal = ({ isOpen, onClose }) => {
  // Previne rolagem do fundo quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity duration-300">
      
      {/* Background click fecha o modal */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Container do Modal */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100 flex flex-col relative z-10 border border-gray-100">
        
        {/* Botão de Fechar Rápido (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-boda-text-muted hover:text-boda-text-dark bg-gray-100 hover:bg-gray-200 transition-colors duration-200 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
          aria-label="Cerrar"
        >
          &times;
        </button>

        {/* Faixa Superior de Destaque */}
        <div className="bg-gradient-to-r from-boda-wine to-boda-rose py-3 px-6 text-center">
          <span className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase block animate-pulse">
            ⚡ ¡OFERTA DE ÚLTIMA HORA! ⚡
          </span>
        </div>

        <div className="p-6 md:p-8 flex flex-col items-center">
          {/* Título Persuasivo */}
          <h3 className="text-xl md:text-2xl font-black text-boda-wine text-center leading-tight mb-2 font-display">
            ¡Multiplica tu Ahorro y Organización!
          </h3>
          <p className="text-xs md:text-sm text-boda-text-muted text-center mb-5 max-w-sm">
            Por solo una pequeña diferencia, llévate el <span className="font-bold text-boda-wine">Plan Completo</span> con todos los bonos premium incluidos.
          </p>

          {/* Imagem do Kit Completo com o Desconto */}
          <div className="relative mb-5 flex justify-center w-full max-w-[240px]">
            <img 
              src="/todos.webp" 
              alt="Kit de Boda Económica Completo" 
              className="w-full h-auto drop-shadow-md transition-transform duration-300 hover:scale-102"
            />
            {/* Tag de Desconto Flutuante */}
            <div className="absolute -top-2 -right-2 bg-boda-green text-white font-black text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md transform rotate-6">
              ¡AHORRA 23%!
            </div>
          </div>

          {/* O que está incluso a mais no Completo */}
          <div className="w-full bg-boda-blue-light/30 rounded-2xl p-4 mb-6">
            <h4 className="text-[11px] font-black text-boda-wine uppercase tracking-wider mb-2.5">
              ¿QUÉ TE LLEVAS CON EL PLAN COMPLETO?
            </h4>
            <ul className="space-y-2 text-left text-xs text-boda-text-dark">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-4 h-4 text-boda-green flex-shrink-0 mt-0.5" />
                <span><strong className="text-boda-wine font-semibold">Ebook Completo:</strong> La guía definitiva paso a paso.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-4 h-4 text-boda-green flex-shrink-0 mt-0.5" />
                <span><strong className="text-boda-wine font-semibold">Bono 1:</strong> Checklist de la Novia + Planeador Mensual.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-4 h-4 text-boda-green flex-shrink-0 mt-0.5" />
                <span><strong className="text-boda-wine font-semibold">Bono 2:</strong> Lista de enseres para el nuevo hogar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-4 h-4 text-boda-green flex-shrink-0 mt-0.5" />
                <span><strong className="text-boda-wine font-semibold">Bono 3 a 5:</strong> Paleta de colores, Fecha ideal y Ahorro.</span>
              </li>
            </ul>
          </div>

          {/* Comparativo de Preço */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-center opacity-50 line-through text-boda-text-muted">
              <span className="text-[9px] block uppercase font-bold">PRECIO REGULAR</span>
              <span className="text-lg font-extrabold">US$ 12,90</span>
            </div>
            <div className="text-2xl font-bold text-boda-text-muted">&rarr;</div>
            <div className="text-center bg-boda-green/10 border border-boda-green/20 px-4 py-1.5 rounded-2xl">
              <span className="text-[9px] block uppercase font-black text-boda-green tracking-wider">PRECIO ESPECIAL</span>
              <div className="flex items-baseline justify-center text-boda-green font-black">
                <span className="text-sm font-bold mr-0.5">US$</span>
                <span className="text-3xl leading-none">9,90</span>
              </div>
            </div>
          </div>

          {/* Botão de Ação Principal (Aceitar com Desconto) */}
          <a 
            href={CONFIG.LINK_CHECKOUT_DESCONTO}
            className="block w-full py-4 bg-boda-accent hover:bg-yellow-400 text-boda-wine font-black text-center text-sm md:text-base rounded-2xl uppercase tracking-wider transition-all duration-200 border-b-4 border-yellow-600 shadow-md hover:shadow-lg pulse-custom mb-3.5"
          >
            🔥 SÍ, MEJORAR AL PLAN COMPLETO
          </a>

          {/* Link Discreto (Recusar e ir para o Básico de $5) */}
          <a 
            href={CONFIG.LINK_CHECKOUT_BASICO}
            className="text-xs text-boda-text-muted hover:text-boda-wine underline decoration-dotted transition-colors duration-200 py-1"
          >
            No, gracias. Prefiero quedarme con el Plan Básico por US$ 5
          </a>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { HeartIcon } from './Icons';
import { ProductMockup } from './ProductMockup';
import { CONFIG } from '../config';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#b5d6f4] via-boda-blue-light to-white pt-8 pb-12 px-4 flex flex-col items-center text-center relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
      
      {/* Ícone de Coração Grande Centralizado */}
      <div className="mb-5 animate-pulse relative z-10">
        <HeartIcon className="w-12 h-12 text-boda-wine drop-shadow-[0_3px_6px_rgba(0,0,0,0.1)]" fill="#8F1D2C" />
      </div>

      {/* Headline principal estilizada com tipografia romântica e contraste premium */}
      <h1 className="text-3xl md:text-5xl font-black max-w-2xl leading-none px-2 uppercase relative z-10">
        <span className="text-white drop-shadow-[0_4px_10px_rgba(143,29,44,0.35)] block">
          Tu Boda con
        </span>
        <span className="font-serif italic text-boda-wine font-black normal-case block mt-2 text-4xl md:text-6xl">
          Menos de 2 Mil Dólares
        </span>
      </h1>

      {/* Subheadline / Texto de Apoio acima do mockup */}
      <p className="mt-6 text-sm md:text-base text-boda-text-dark font-semibold max-w-xl leading-relaxed px-4 italic relative z-10">
        La Guía Secreta Para Una Boda Perfecta y Económica, Incluso con Poco Tiempo y Muchos Invitados
      </p>

      {/* Mockup do Produto */}
      <div className="my-6">
        <ProductMockup />
      </div>

      {/* Bloco de Preço Exatamente Igual à Referência */}
      <div className="flex flex-col items-center justify-center mt-6 select-none">
        {/* Preço Antigo (Vermelho, Riscado) */}
        <span className="text-3xl md:text-4xl font-extrabold text-[#D30000] tracking-wider uppercase line-through">
          DE US$47
        </span>
        
        {/* Texto de transição */}
        <span className="text-base md:text-lg font-black text-boda-text-dark tracking-wide uppercase mt-1">
          POR APENAS
        </span>
        
        {/* Preço Novo em Destaque Verde Gigante */}
        <div className="text-[#00A000] font-black text-7xl md:text-8xl tracking-tight my-1">
          US$5
        </div>
        
        {/* Escassez */}
        <span className="text-base md:text-lg font-black text-boda-text-dark tracking-widest uppercase">
          ¡ÚLTIMO DÍA!
        </span>
      </div>
    </section>
  );
};

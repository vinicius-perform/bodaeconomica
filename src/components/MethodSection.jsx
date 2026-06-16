import React from 'react';
import { WeddingRingsIcon } from './Icons';

export const MethodSection = () => {
  return (
    <section className="bg-white py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl text-center">
        {/* Bloco de conteúdo da explicação do método */}
        <div className="space-y-6 text-boda-text-dark text-sm md:text-base leading-relaxed">
          <p className="font-semibold text-boda-wine text-base md:text-lg">
            Este es exactamente el mismo proceso que muchas novias usan para organizar bodas hermosas, económicas y sin perder el control del presupuesto.
          </p>
          
          <div className="w-12 h-[2px] bg-boda-rose mx-auto my-4"></div>

          <p>
            Es un proceso simple, directo y fácil de aplicar.
          </p>

          <p className="bg-boda-blue-light/40 border border-boda-blue-medium/50 p-4 rounded-xl font-medium">
            💡 Y lo mejor: no necesitas tener experiencia en eventos.
          </p>

          <p>
            Puedes empezar aunque no sepas por dónde comenzar, aunque tengas poco tiempo y aunque tu presupuesto sea limitado.
          </p>
        </div>

        {/* Ilustração grande de Alianças / Coração no centro */}
        <div className="mt-12 flex flex-col items-center justify-center animate-pulse">
          <WeddingRingsIcon className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-md text-boda-wine" />
          <span className="text-[11px] font-bold text-boda-rose-dark uppercase tracking-widest mt-2 block">
            El Amor no tiene que costar una fortuna
          </span>
        </div>
      </div>
    </section>
  );
};

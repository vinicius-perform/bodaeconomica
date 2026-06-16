import React from 'react';
import { HeartIcon } from './Icons';

export const TestimonialsSection = () => {
  // Lista das imagens reais de depoimento na pasta public
  const testimonialImages = [
    '/dep2.webp',
    '/dep3.webp',
    '/dep4.webp',
    '/dep.webp'
  ];

  return (
    <section className="bg-boda-wine-light/30 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-md text-center">
        {/* Título da seção */}
        <h3 className="text-xl md:text-2xl font-black text-boda-wine uppercase tracking-tight mb-8 flex items-center justify-center gap-2">
          <HeartIcon className="w-6 h-6 text-boda-rose" fill="#E38B8B" />
          Lo Que Dicen Las Novias
        </h3>

        {/* Lista de imagens de depoimentos, uma abaixo da outra */}
        <div className="space-y-6 flex flex-col items-center">
          {testimonialImages.map((imgSrc, idx) => (
            <div 
              key={idx} 
              className="w-full bg-white p-2 rounded-2xl shadow-card border border-gray-100/50 transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              <img 
                src={imgSrc} 
                alt={`Testimonio Real ${idx + 1}`} 
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

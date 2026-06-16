import React from 'react';

export const CreatorSection = () => {
  return (
    <section className="bg-boda-wine-light/20 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl text-center flex flex-col items-center">
        
        {/* Título Principal */}
        <h3 className="text-xl md:text-2xl font-black text-boda-wine uppercase tracking-tight mb-8">
          ¡Mucho gusto!
        </h3>

        {/* Imagem cheia da Autora sem moldura */}
        <div className="mb-6 select-none">
          <img 
            src="/autora.webp" 
            alt="Creadora de Boda Económica" 
            className="w-full max-w-sm h-auto rounded-2xl shadow-card"
          />
        </div>

        {/* Conteúdo sobre a criadora */}
        <div className="space-y-5 text-left text-boda-text-dark text-sm md:text-base leading-relaxed max-w-md mx-auto px-2">
          <p className="font-semibold text-center text-boda-wine italic text-base">
            Soy la persona detrás de Boda Económica.
          </p>

          <p>
            Después de ver tantas parejas creyendo que casarse era imposible por causa de los altos precios, decidí crear un material simple y práctico para ayudar a novias a organizar su boda de una forma más económica.
          </p>

          <p>
            La idea no es organizar la boda por ti.
          </p>

          <p className="border-l-4 border-boda-rose pl-3 py-1 font-medium">
            La idea es enseñarte a tomar mejores decisiones, entender dónde puedes ahorrar y cómo planear cada etapa sin desesperarte.
          </p>

          <p>
            Hoy quiero ayudarte a tener una boda bonita, especial y posible, sin empezar tu matrimonio con deudas innecesarias.
          </p>

          <p className="text-center font-bold text-boda-wine-light bg-boda-wine py-2 rounded-lg text-white mt-4 uppercase text-xs md:text-sm tracking-wide">
            Te espero dentro del material.
          </p>
        </div>

        {/* CTA "OK, VAMOS ALLÁ" */}
        <div className="mt-8 w-full max-w-md">
          <a
            href="#ofertas"
            className="block w-full py-4 bg-boda-accent hover:bg-yellow-400 text-boda-wine font-black text-center text-lg md:text-xl rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider border-b-4 border-yellow-600 pulse-custom"
          >
            OK, VAMOS ALLÁ
          </a>
        </div>

      </div>
    </section>
  );
};

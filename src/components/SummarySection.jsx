import React from 'react';

export const SummarySection = () => {
  return (
    <section className="bg-white py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl text-center">
        
        {/* Título Principal */}
        <h3 className="text-xl md:text-2xl font-black text-boda-wine uppercase tracking-tight mb-8">
          ¿No leíste todo? Te lo resumo
        </h3>

        {/* Corpo de Texto Persuasivo */}
        <div className="space-y-5 text-left text-boda-text-dark text-sm md:text-base leading-relaxed max-w-xl mx-auto px-2">
          <p>
            Si la idea de hacer una boda hermosa, organizada y con menos de 2 mil dólares es una buena meta para ti, entonces esta guía puede ser una decisión muy inteligente.
          </p>

          <p className="text-xs text-boda-text-muted italic bg-gray-50 p-4 border-l-2 border-boda-rose rounded-r-lg">
            No puedo garantizar que todas las parejas tendrán exactamente el mismo resultado, porque el costo final depende de la ciudad, número de invitados, proveedores y elecciones de cada pareja.
          </p>

          <p>
            Pero sí puedo garantizar que tendrás acceso a estrategias simples, prácticas y directas para organizar mejor tu boda, evitar gastos innecesarios y tomar decisiones con más claridad.
          </p>

          <div className="w-12 h-[2px] bg-boda-rose mx-auto my-4"></div>

          <p className="font-bold text-boda-wine uppercase text-center">
            La propuesta es simple:
          </p>

          <p>
            Te estoy presentando una oportunidad de ahorrar en uno de los momentos más importantes de tu vida, aplicando un método práctico de organización y economía.
          </p>

          <p>
            Este material puede convertirse en tu guía oficial para realizar ese sueño sin sentir que necesitas gastar una fortuna.
          </p>

          <p className="bg-boda-green-light border-l-4 border-boda-green p-4 rounded-r-lg font-medium text-boda-wine">
            🎁 Comprando hoy, recibes acceso inmediato, pago único, bonos exclusivos y 7 días de garantía.
          </p>
        </div>

        {/* CTA "¡YO QUIERO!" */}
        <div className="mt-8">
          <a
            href="#ofertas"
            className="inline-block w-full max-w-md py-4 bg-boda-accent hover:bg-yellow-400 text-boda-wine font-black text-center text-lg md:text-xl rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider border-b-4 border-yellow-600 pulse-custom"
          >
            ¡YO QUIERO!
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';

export const ProblemSection = () => {
  return (
    <section className="bg-white py-12 px-4 flex flex-col items-center">
      {/* Linha divisória fina no topo */}
      <div className="w-full max-w-lg h-[1px] bg-boda-rose/30 mb-8"></div>

      <div className="w-full max-w-2xl text-center">
        {/* Título em destaque itálico */}
        <h2 className="text-xl md:text-2xl font-bold text-boda-wine italic leading-tight px-2 mb-8">
          ¿Cómo tener la boda y la fiesta de mis sueños ahorrando?
        </h2>

        {/* Perguntas */}
        <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto">
          <div className="bg-boda-wine-light/50 border border-boda-rose/20 rounded-xl py-3 px-4 shadow-sm">
            <p className="text-sm md:text-base font-semibold text-boda-wine">
              ¿Cuáles son los elementos esenciales de una boda?
            </p>
          </div>
          <div className="bg-boda-wine-light/50 border border-boda-rose/20 rounded-xl py-3 px-4 shadow-sm">
            <p className="text-sm md:text-base font-semibold text-boda-wine">
              ¿Cómo organizar todo sin contratar wedding planner?
            </p>
          </div>
          <div className="bg-boda-wine-light/50 border border-boda-rose/20 rounded-xl py-3 px-4 shadow-sm">
            <p className="text-sm md:text-base font-semibold text-boda-wine">
              ¿Cómo preparar todo en poco tiempo?
            </p>
          </div>
        </div>

        {/* Textos emocionais e explicativos */}
        <div className="space-y-6 text-left text-boda-text-dark text-sm md:text-base leading-relaxed max-w-xl mx-auto px-2">
          <p>
            Estas son algunas de las dudas que probablemente tienes ahora mismo, y las respuestas a estas y muchas otras preguntas son las que pueden ayudarte a <strong className="text-boda-wine font-bold">ahorrar muchísimo dinero</strong>.
          </p>

          <p className="bg-boda-blue-light/30 border-l-4 border-boda-blue-medium p-4 rounded-r-lg font-medium italic">
            ¿Y si te dijera que es posible tener una boda completa, bonita y organizada con menos de 2 mil dólares, sin sentir que estás haciendo algo feo o improvisado?
          </p>

          <p>
            Y lo mejor: no necesitas renunciar al vestido, a una comida deliciosa para tus invitados, a una linda decoración, a la fotografía o a ese momento especial que siempre soñaste.
          </p>

          <p>
            Lo que necesitas es seguir un método simple, práctico y pensado para parejas que quieren casarse sin empezar su matrimonio llenas de deudas.
          </p>

          <p>
            Es claro que el éxito de una boda depende de varios detalles.
          </p>

          <p className="text-center font-bold text-lg text-boda-rose-dark uppercase my-2">
            Pero esa es la mejor parte.
          </p>

          <p className="text-center text-sm md:text-base font-medium">
            Porque aquí te voy a enseñar a:
          </p>
        </div>

        {/* Destaque de ação */}
        <div className="mt-8 bg-boda-wine text-white font-extrabold text-lg md:text-xl py-4 px-6 rounded-xl shadow-md uppercase tracking-wider max-w-md mx-auto">
          AHORRAR Y ORGANIZAR TODO DESDE CERO
        </div>
      </div>
    </section>
  );
};

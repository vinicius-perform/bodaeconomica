import React from 'react';
import { ChecklistIcon, PlannerIcon, SimpleRingsIcon, BouquetIcon, HeartIcon } from './Icons';

export const BonusSection = () => {
  const bonuses = [
    {
      id: 1,
      title: "Bono #1 — Checklist + Planner de la Novia",
      subtitle: "Un planner completo",
      text: "Vas a recibir una lista completa de tareas, con todo lo que necesitas organizar desde el compromiso hasta el gran día. Incluye espacios para anotaciones, lista de invitados, proveedores, presupuesto, música, pendientes y mucho más. Este bono es perfecto para mantener todo bajo control sin depender de nadie para organizarte.",
      value: "US$27",
      icon: <PlannerIcon className="w-8 h-8 text-white" />,
    },
    {
      id: 2,
      title: "Bono #2 — Lista de Enseres para el Nuevo Hogar",
      subtitle: "Todo lo que tu casa necesita",
      text: "Vas a recibir una lista práctica con los principales artículos para tu nuevo hogar, para que no olvides nada importante al comenzar esta nueva etapa.",
      value: "US$12",
      icon: <ChecklistIcon className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Bono #3 — Todo Sobre el Matrimonio Civil",
      subtitle: "Basta de burocracia",
      text: "Te explicaremos los principales puntos que debes tener en cuenta para organizar tu matrimonio civil en Colombia: documentos, tiempos, trámites, notaría y detalles importantes antes del gran día.",
      value: "US$19",
      icon: <SimpleRingsIcon className="w-8 h-8 text-white" />,
    },
    {
      id: 4,
      title: "Bono #4 — Paleta de Colores en Minutos",
      subtitle: "Acaba con la confusión de los colores",
      text: "¿No sabes qué color elegir para las damas, las madres, la decoración o los detalles de la boda? Con este material tendrás una forma simple de definir una paleta bonita, armónica y económica.",
      value: "US$17",
      icon: <BouquetIcon className="w-8 h-8 text-white" />,
    },
    {
      id: 5,
      title: "Bono #5 — La Fecha Perfecta Para Ustedes",
      subtitle: "Existe una fecha más estratégica para cada pareja",
      text: "Con base en clima, temporada, disponibilidad de proveedores, flores y competencia de fechas, te ayudaremos a pensar mejor el día ideal para tu boda. Elegir bien la fecha puede ayudarte a ahorrar más de lo que imaginas.",
      value: "US$15",
      icon: <HeartIcon className="w-8 h-8 text-white" fill="white" />,
    },
  ];

  return (
    <section className="bg-white py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl">
        
        {/* Título Principal */}
        <h3 className="text-xl md:text-2xl font-black text-boda-wine text-center uppercase tracking-tight mb-2">
          Comprando hoy recibes algunos bonos extras
        </h3>
        <p className="text-center text-xs md:text-sm text-boda-text-muted mb-8 italic">
          Todo lo necesario para que tu planeación sea perfecta y libre de deudas.
        </p>

        {/* Cards de Bônus (Um abaixo do outro) */}
        <div className="space-y-8">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id} 
              className="bg-white border border-gray-200 rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              {/* Cabeçalho Vermelho/Vinho */}
              <div className="bg-boda-wine p-4 text-white flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  {bonus.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm md:text-base leading-tight">
                    {bonus.title}
                  </h4>
                  <p className="text-[10px] md:text-xs text-boda-rose-light opacity-90 font-medium italic mt-0.5">
                    {bonus.subtitle}
                  </p>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-5">
                <p className="text-boda-text-dark text-xs md:text-sm leading-relaxed mb-4">
                  {bonus.text}
                </p>

                {/* Exibição da imagem do bônus 1 se for o id correspondente */}
                {bonus.id === 1 && (
                  <div className="flex justify-center my-6 select-none">
                    <img 
                      src="/bono1.webp" 
                      alt="Checklist + Planner de la Novia" 
                      className="w-full max-w-[280px] h-auto drop-shadow-md rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Exibição da imagem do bônus 2 se for o id correspondente */}
                {bonus.id === 2 && (
                  <div className="flex justify-center my-6 select-none">
                    <img 
                      src="/bono2.webp" 
                      alt="Lista de Enseres para el Nuevo Hogar" 
                      className="w-full max-w-[280px] h-auto drop-shadow-md rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Exibição da imagem do bônus 3 se for o id correspondente */}
                {bonus.id === 3 && (
                  <div className="flex justify-center my-6 select-none">
                    <img 
                      src="/bono3.webp" 
                      alt="Todo Sobre el Matrimonio Civil" 
                      className="w-full max-w-[280px] h-auto drop-shadow-md rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Exibição da imagem do bônus 4 se for o id correspondente */}
                {bonus.id === 4 && (
                  <div className="flex justify-center my-6 select-none">
                    <img 
                      src="/bono4.webp" 
                      alt="Paleta de Colores en Minutos" 
                      className="w-full max-w-[280px] h-auto drop-shadow-md rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Exibição da imagem do bônus 5 se for o id correspondente */}
                {bonus.id === 5 && (
                  <div className="flex justify-center my-6 select-none">
                    <img 
                      src="/bono5.webp" 
                      alt="La Fecha Perfecta Para Ustedes" 
                      className="w-full max-w-[280px] h-auto drop-shadow-md rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Preço Estimado Centralizado Sem Risco e Sem Etiqueta Gratis */}
                <div className="border-t border-gray-100 pt-4 text-center">
                  <div className="text-sm md:text-base font-extrabold text-[#D30000] tracking-wide">
                    Cuánto costaría: <span className="text-base md:text-lg font-black ml-0.5">{bonus.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

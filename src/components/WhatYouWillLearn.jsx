import React from 'react';
import { CheckIcon, XIcon } from './Icons';

export const WhatYouWillLearn = () => {
  const points = [
    {
      title: "Lista de Invitados:",
      desc: "Basta de confusión. Te voy a mostrar una forma simple de organizar tu lista sin drama, entendiendo quién realmente debe estar en ese momento.",
    },
    {
      title: "Secretos de Ahorro:",
      desc: "Aquí está lo que puede ayudarte a ahorrar. Vas a entender errores comunes que hacen que muchas parejas paguen mucho más de lo necesario.",
    },
    {
      title: "Fecha Estratégica:",
      desc: "¿Sabías que el mes, el día de la semana y hasta el horario de la boda pueden influir directamente en el precio?",
    },
    {
      title: "Banquete Económico:",
      desc: "Te mostraremos alternativas inteligentes para crear un menú delicioso, bonito y económico para tus invitados.",
    },
    {
      title: "Decoración Bonita sin Gastar de Más:",
      desc: "Aprende a elegir detalles que hacen diferencia visual sin llenar la boda de gastos innecesarios.",
    },
    {
      title: "¿Tienes Poco Tiempo?",
      desc: "No te preocupes. También te enseñaremos cómo organizar prioridades cuando faltan pocos meses para el gran día.",
    },
  ];

  const avoidedPoints = [
    "Sin necesitar ser experta en eventos.",
    "Incluso si no sabes por dónde empezar.",
    "Sin hacer una boda fea.",
    "Sin endeudarte para impresionar a los demás.",
  ];

  return (
    <section className="bg-boda-wine-light/20 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl">
        
        {/* Título Principal */}
        <h3 className="text-2xl md:text-3xl font-black text-boda-wine text-center uppercase tracking-tight mb-8">
          LO QUE VAS A APRENDER
        </h3>

        {/* Lista com Checkmarks Verdes */}
        <div className="space-y-6 mb-10">
          {points.map((p, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-boda-rose/10 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mt-0.5 flex-shrink-0">
                <CheckIcon className="w-6 h-6 text-boda-green" />
              </div>
              <div>
                <h4 className="font-extrabold text-boda-text-dark text-sm md:text-base">
                  {p.title}
                </h4>
                <p className="text-boda-text-muted text-xs md:text-sm mt-1 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Destaque "Y MUCHO, MUCHO MÁS" */}
        <div className="text-center my-8">
          <span className="inline-block bg-boda-rose-light border border-boda-rose text-boda-wine font-black text-sm md:text-base px-6 py-2 rounded-full uppercase tracking-widest animate-pulse">
            ✨ Y MUCHO, MUCHO MÁS
          </span>
        </div>

        {/* Lista de Dores Evitadas (X Vermelho) */}
        <div className="bg-white rounded-2xl border border-boda-rose/10 p-6 shadow-sm mb-8">
          <div className="space-y-3">
            {avoidedPoints.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <XIcon className="w-5 h-5 text-boda-rose-dark" />
                </div>
                <p className="text-boda-text-dark font-medium text-xs md:text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Etiqueta Visual Estática (No Clicable) */}
        <div className="text-center mt-6">
          <div
            className="inline-block bg-boda-accent text-boda-wine font-black text-xs md:text-sm py-3 px-8 rounded-full shadow-md uppercase tracking-widest border-b-2 border-yellow-600 select-none"
          >
            🔥 COMPRANDO HOY
          </div>
        </div>

      </div>
    </section>
  );
};

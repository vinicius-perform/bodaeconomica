import React, { useState } from 'react';

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿En cuánto tiempo recibiré mi acceso?",
      answer: "Después de la aprobación del pago, recibirás las instrucciones de acceso en el correo electrónico utilizado durante la compra.",
    },
    {
      question: "¿El pago es único?",
      answer: "Sí, el pago es 100% único. No hay mensualidades ni cobros recurrentes de ningún tipo.",
    },
    {
      question: "¿Y si no me gusta?",
      answer: "Tienes 7 días de garantía incondicional. Si por alguna razón decides que el material no es lo que esperabas, puedes solicitar el reembolso completo de tu dinero directamente en la plataforma de compra.",
    },
    {
      question: "¿Necesito experiencia en eventos?",
      answer: "No. Todo el material fue redactado con un lenguaje sumamente sencillo, práctico y pensado para parejas que están empezando desde absoluto cero.",
    },
    {
      question: "¿Puedo organizar mi boda sin wedding planner?",
      answer: "Sí, ese es el principal propósito del material. Te brindamos una guía paso a paso y herramientas listas para que puedas gestionar y coordinar los detalles más importantes por tu cuenta.",
    },
    {
      question: "¿La guía garantiza una boda por menos de 2 mil dólares?",
      answer: "No podemos garantizar un resultado exacto porque el costo final dependerá del número de invitados, ciudad, proveedores y tus decisiones individuales. Sin embargo, el método fue estructurado para maximizar tu ahorro en cada una de esas etapas y evitar gastos innecesarios.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl">
        
        {/* Título Principal */}
        <h3 className="text-xl md:text-2xl font-black text-boda-wine text-center uppercase tracking-tight mb-8">
          Preguntas frecuentes
        </h3>

        {/* Lista de Acordeões do FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Botão de Tópico (Pergunta) */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-xs md:text-sm text-boda-text-dark transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <span className={`text-base font-bold text-boda-wine transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {/* Conteúdo (Resposta) */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-gray-100' : 'max-h-0'}`}
                >
                  <div className="p-4 text-xs md:text-sm text-boda-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

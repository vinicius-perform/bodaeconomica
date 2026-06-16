import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MethodSection } from './components/MethodSection';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { SummarySection } from './components/SummarySection';
import { ObjectionSection } from './components/ObjectionSection';
import { FAQSection } from './components/FAQSection';
import { CreatorSection } from './components/CreatorSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-boda-text-dark flex flex-col">
      
      {/* 1. Topo / Hero */}
      <HeroSection />

      {/* 2. Perguntas de identificação */}
      <ProblemSection />

      {/* 3. Provas / Depoimentos */}
      <TestimonialsSection />

      {/* 4 & 5. Explicação do método e Ilustração de alianças */}
      <MethodSection />

      {/* 6. O que você irá aprender */}
      <WhatYouWillLearn />

      {/* 7. Bônus extras */}
      <BonusSection />

      {/* 8. Escolha a melhor oferta */}
      <OfferSection />

      {/* 9. Resumo persuasivo */}
      <SummarySection />

      {/* 10. Objeção: por que tão barato? */}
      <ObjectionSection />

      {/* 11. Perguntas frequentes (FAQ) */}
      <FAQSection />

      {/* 12. Sobre a criadora */}
      <CreatorSection />

      {/* 13. Rodapé */}
      <Footer />

    </div>
  );
}

export default App;

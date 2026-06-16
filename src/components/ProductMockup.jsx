import React from 'react';

export const ProductMockup = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center py-2 select-none ${className}`}>
      {/* Luzes de fundo para destacar o produto */}
      <div className="absolute w-64 h-84 bg-boda-rose/10 blur-3xl rounded-full -top-4 -left-4"></div>
      <div className="absolute w-64 h-84 bg-boda-blue-medium/20 blur-3xl rounded-full -bottom-4 -right-4"></div>

      {/* Imagem real capa.webp que já possui a modelagem 3D do ebook */}
      <div className="relative transition-transform duration-300 hover:scale-[1.03]">
        <img 
          src="/dep.webp" 
          alt="Boda Económica Ebook" 
          className="w-full max-w-[480px] md:max-w-[540px] h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  );
};


import React from 'react';

export const ObjectionSection = () => {
  return (
    <section className="bg-boda-wine-light/30 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl text-center">
        
        {/* Título Principal */}
        <h3 className="text-xl md:text-2xl font-black text-boda-wine uppercase tracking-tight mb-8">
          Pero si es tan bueno, ¿por qué cuesta tan poco?
        </h3>

        {/* Corpo de Texto / Objeção Quebrada */}
        <div className="space-y-6 text-left text-boda-text-dark text-sm md:text-base leading-relaxed max-w-xl mx-auto px-2">
          <p className="italic text-center text-boda-text-muted font-medium">
            Sé que probablemente pensaste eso. El valor de US$5 y US$12,90 no es aleatorio.
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-white p-4 rounded-xl border border-boda-rose/10 shadow-sm">
              <h4 className="font-extrabold text-boda-wine text-xs md:text-sm uppercase tracking-wider mb-1">
                Razón número 1:
              </h4>
              <p className="text-boda-text-dark">
                El precio no debe ser un obstáculo para quien realmente quiere organizar su boda.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-boda-rose/10 shadow-sm">
              <h4 className="font-extrabold text-boda-wine text-xs md:text-sm uppercase tracking-wider mb-1">
                Razón número 2:
              </h4>
              <p className="text-boda-text-dark">
                Un valor simbólico evita curiosos y permite que solo entren personas realmente interesadas.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-boda-rose/10 shadow-sm">
              <h4 className="font-extrabold text-boda-wine text-xs md:text-sm uppercase tracking-wider mb-1">
                Razón número 3:
              </h4>
              <p className="text-boda-text-dark">
                Queremos que más novias puedan acceder a este material y comiencen a organizarse antes de cometer errores caros.
              </p>
            </div>
          </div>

          {/* Destaque Final de Garantia */}
          <div className="pt-6 border-t border-boda-rose/20 text-center font-black text-boda-wine uppercase tracking-widest text-xs md:text-sm space-y-1">
            <p>✓ Sin trampas.</p>
            <p>✓ Sin letras pequeñas.</p>
            <p>✓ Sin mensualidades.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { CONFIG } from '../config';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-boda-text-dark text-white py-12 px-4 text-center border-t border-gray-800">
      <div className="w-full max-w-xl mx-auto space-y-4">
        
        {/* Texto de Suporte */}
        <p className="text-xs md:text-sm text-gray-400">
          ¿Tienes alguna duda? Contáctanos a nuestro correo de soporte:
          <br />
          <a 
            href={`mailto:${CONFIG.EMAIL_SUPORTE}`} 
            className="text-boda-accent font-bold hover:underline block mt-1"
          >
            {CONFIG.EMAIL_SUPORTE}
          </a>
        </p>

        {/* Linha Divisória */}
        <div className="w-16 h-[1px] bg-gray-700 mx-auto my-3"></div>

        {/* Políticas e Garantia */}
        <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
          Producto digital. Acceso inmediato después de la aprobación del pago. Garantía incondicional de 7 días.
        </p>

        {/* Disclaimer Importante */}
        <p className="text-[9px] text-gray-500 max-w-sm mx-auto leading-normal">
          Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook. Una vez que dejas Facebook, no es su responsabilidad sino de nuestro sitio. Hacemos todo lo posible para declarar y mostrar claramente las pruebas del producto.
        </p>

        {/* Copyright */}
        <p className="text-[10px] text-gray-600 pt-4 border-t border-gray-800">
          © {currentYear} Boda Económica • Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};

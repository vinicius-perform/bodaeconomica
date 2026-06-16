import React from 'react';

// Ícone de Coração Grande preenchido
export const HeartIcon = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Ilustração grande de Alianças entrelaçadas com coração
export const WeddingRingsIcon = ({ className = "w-24 h-24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    {/* Coração ao fundo */}
    <path
      d="M50 35 C40 20, 20 25, 20 45 C20 65, 50 85, 50 85 C50 85, 80 65, 80 45 C80 25, 60 20, 50 35 Z"
      fill="#FCE8E6"
      stroke="#E38B8B"
      strokeWidth="1.5"
    />
    {/* Aliança da esquerda */}
    <circle cx="42" cy="58" r="16" stroke="#8F1D2C" strokeWidth="3" fill="none" />
    <circle cx="42" cy="58" r="13" stroke="#C25D5D" strokeWidth="1" fill="none" />
    {/* Aliança da direita (sobreposta) */}
    <circle cx="58" cy="58" r="16" stroke="#8F1D2C" strokeWidth="3" fill="none" />
    <circle cx="58" cy="58" r="13" stroke="#C25D5D" strokeWidth="1" fill="none" />
    {/* Pequeno brilho / diamante */}
    <polygon points="58,38 61,41 58,44 55,41" fill="#FFD014" />
  </svg>
);

// Ícone de Alianças simples
export const SimpleRingsIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="9" cy="13" r="6" stroke="#E38B8B" strokeWidth="2" />
    <circle cx="15" cy="13" r="6" stroke="#8F1D2C" strokeWidth="2" />
  </svg>
);

// Ícone de Checklist
export const ChecklistIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Ícone de Planner / Calendário
export const PlannerIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

// Ícone de Buquê
export const BouquetIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    {/* Flores */}
    <circle cx="12" cy="7" r="4" fill="#FCE8E6" stroke="#E38B8B" strokeWidth="1.5" />
    <circle cx="8" cy="10" r="3.5" fill="#FCE8E6" stroke="#E38B8B" strokeWidth="1.5" />
    <circle cx="16" cy="10" r="3.5" fill="#FCE8E6" stroke="#E38B8B" strokeWidth="1.5" />
    {/* Caules/Ramos */}
    <path d="M12 11v9M9.5 12.5l5 7M14.5 12.5l-5 7" stroke="#8F1D2C" strokeWidth="2" strokeLinecap="round" />
    {/* Laço */}
    <path d="M10 16.5c1-1 3-1 4 0" stroke="#FFD014" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10.5 17l-1.5 2M13.5 17l1.5 2" stroke="#FFD014" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Checkmark verde
export const CheckIcon = ({ className = "w-5 h-5 text-boda-green" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

// X vermelho para dores
export const XIcon = ({ className = "w-5 h-5 text-boda-rose-dark" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
      clipRule="evenodd"
    />
  </svg>
);

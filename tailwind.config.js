/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',    // Fundo azul bem escuro
        'card-bg': '#1e293b',    // Fundo dos cards
        'meu-roxo': '#6366f1',   // Roxo neon para detalhes
        'meu-azul': '#0ea5e9',   // Azul claro para ícones
      }
    },
  },
  plugins: [],
}
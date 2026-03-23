/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Foundation
        'background': '#0e0e0e',
        'surface': '#0e0e0e',
        'surface-dim': '#0e0e0e',
        'surface-container': '#1a1a1a',
        'surface-container-low': '#131313',
        'surface-container-high': '#20201f',
        'surface-container-highest': '#262626',
        'surface-bright': '#2c2c2c',
        'surface-variant': '#262626',
        
        // Primary - The Glow
        'primary': '#ffd16c',
        'primary-fixed': '#fdc003',
        'primary-container': '#fdc003',
        'primary-dim': '#ecb200',
        'on-primary': '#604700',
        'on-primary-fixed': '#3d2b00',
        
        // Secondary - The Ember
        'secondary': '#ff743b',
        'secondary-container': '#a83900',
        'secondary-dim': '#ff743b',
        'on-secondary': '#3f1000',
        
        // Tertiary
        'tertiary': '#ffac54',
        'tertiary-container': '#ff9800',
        
        // Text
        'on-surface': '#ffffff',
        'on-surface-variant': '#adaaaa',
        'on-background': '#ffffff',
        
        // Outline
        'outline': '#767575',
        'outline-variant': '#484847',
        
        // Error
        'error': '#ff7351',
        'error-container': '#b92902',
        
        // Custom theme colors from task
        'charcoal': '#1A1A1A',
        'ember': '#FF6B35',
        'ash': '#2D2D2D',
        'smoke': '#3A3A3A',
        'cream': '#FFF8F0',
        'gold': '#FFD700',
      },
      fontFamily: {
        'headline': ['Epilogue', 'sans-serif'],
        'body': ['Work Sans', 'sans-serif'],
        'label': ['Work Sans', 'sans-serif'],
        // Additional fonts from task
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '0.75rem',
      },
      animation: {
        'ember-glow': 'ember-glow 2s ease-in-out infinite alternate',
        'smoke-drift': 'smoke-drift 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        'ember-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(255, 107, 53, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.5), 0 0 60px rgba(255, 107, 53, 0.2)' 
          },
        },
        'smoke-drift': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)',
            opacity: '0.3',
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '0.5',
          },
        },
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

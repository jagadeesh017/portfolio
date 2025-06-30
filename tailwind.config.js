// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // make sure to include all relevant files
  ],
   safelist: [
    'blur-0',
    'blur-sm',
    'brightness-100',
    'brightness-75'
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        vibes: ['Great Vibes', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'], // Added for compatibility
        'cursive': ['cursive'], // Added for header logo
        insta: ['Poppins', 'sans-serif']
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'sparkle': 'sparkle 20s linear infinite',
        'sparkle-colored': 'sparkle-colored 25s linear infinite reverse'
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)' 
          },
          '50%': { 
            transform: 'translateY(-30px) rotate(10deg) scale(1.05)' 
          }
        },
        'float-reverse': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)' 
          },
          '50%': { 
            transform: 'translateY(30px) rotate(-10deg) scale(0.95)' 
          }
        },
        'pulse-slow': {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.4',
            transform: 'scale(1.1)'
          }
        },
        'sparkle': {
          '0%': { 
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(-50px)',
            opacity: '0.4'
          }
        },
        'sparkle-colored': {
          '0%': { 
            transform: 'translateY(0px) translateX(0px)'
          },
          '100%': { 
            transform: 'translateY(-150px) translateX(100px)'
          }
        }
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      blur: {
        '4xl': '72px'
      }
    },
  },
  plugins: [],
  safelist: ['cursor-custom'],
}
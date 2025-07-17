/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
      },
      colors: {
        background: 'var(--background-color)',
        container: 'var(--container-color)',
        stroke: 'var(--stroke-color)',
        primary: 'var(--primary-color)',
        title: 'var(--title-color)',
        text: 'var(--text-color)',
        subtext: 'var(--text-secondary)',
      },
      backgroundImage: {
        'dots': 'var(--dots)',
        'endless-clouds': "url('/endless-clouds.svg')"
      },
      gridTemplateColumns: {
        '3fr': 'repeat(3, 140px)',
      },
      aspectRatio: {
        'thumbnail': '2',
      },
      animation: {
        'loop-1' : 'scroll var(--time) linear infinite',
        'loop-2' : 'scroll2 var(--time) linear infinite',
        flip: 'flip 0.6s ease-in-out forwards',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        scroll2: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-200%)',
          },
        },
        flip: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '50%': {
            transform: 'rotateY(180deg)',
          },
          '100%': {
            transform: 'rotateY(360deg)',
          },
        },
      },
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

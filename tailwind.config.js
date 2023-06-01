/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#4D4D4D',
          300: '#3D3D3D',
          400: '#2E2E2E',
          500: '#1F1F1F',
          600: '#0F0F0F',
        },
        blue: {
          200: '#ADD5F7',
          300: '#7FB2F0',
          400: '#4E7AC7',
          500: '#3547BC',
          600: '#16193B',
        },
      },
      screens: {
        '3xl': { 'max': '1680px' },
        '1.5xl': { 'max': '1400px' },
        'tablet': { 'max': '854px' },
        'smartphones': { 'min': '375px', 'max': '540px' },
        'button': { 'min': '1279px' }
      },
    },
  },
  plugins: [],
}

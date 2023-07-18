/** @type {import('tailwindcss').Config} */

const myColors = {
  'background': '#111010',
  'pText': '#F5F0F6',
  'sText' :'#808080',
  'pHighlight' : '#FFB938',
  'sHighlight' : '#0267C1',
  'cardBg': '#000000',
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: myColors,
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
        'nums': ['Lato', 'sans-serif'],
        'sansM': ['Raleway-Semibold', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

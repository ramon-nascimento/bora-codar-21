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
        purple: {
          100: '#C084FC',
          200: '#A855F7',
          300: '#9333EA'
        },
        neutral: {
          100: '#F9FAFB',
          200: '#E4E4E7',
          300: '#A1A1AA',
          400: '#3F3F46',
          500: '#18181B',
          600: '#09090B'
        }
      }
    },
  },
  plugins: [require('tailwindcss-scrollbar')],
}

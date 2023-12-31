/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        posts: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#0a0a0a',
        'dark-lighter': '#141414',
        accent: {
          DEFAULT: '#e07a2f',
          coral: '#e05c5c',
        },
        project: {
          linkstreaks: '#7c3aed',
          airjust: '#22c55e',
          shwrk: '#2d8db5',
        },
      },
    },
  },
  plugins: [],
};

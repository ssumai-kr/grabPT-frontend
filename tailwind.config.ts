import scrollbarHide from 'tailwind-scrollbar-hide';
import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [scrollbarHide],
};

export default config;

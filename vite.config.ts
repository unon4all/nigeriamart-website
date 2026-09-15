import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/nigeriamart-website/',

  plugins: [react(), tailwindcss()],

  build: {
    target: 'es2020',
    cssMinify: true,
  },
});
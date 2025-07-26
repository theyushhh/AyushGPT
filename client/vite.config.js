import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/AyushGPT/' : '/', // Use repo name only for production
  build: {
    outDir: '../docs', // Output to docs for GitHub Pages
    emptyOutDir: true
  },
  server: {
    open: true, // Automatically open browser on dev
    port: 3000 // Default dev server port
  }
});

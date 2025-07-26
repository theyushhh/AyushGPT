import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AyushGPT/', // Always use the repo name for GitHub Pages
  build: {
    outDir: '../docs', // Output to docs folder for GitHub Pages
    emptyOutDir: true, // Clear the output directory before building
  },
  server: {
    open: true, // Automatically open browser on dev
    port: 3000, // Default dev server port
  },
})

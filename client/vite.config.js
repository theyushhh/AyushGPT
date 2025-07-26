import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AyushGPT/', // Match your repository name
  build: {
    outDir: '../docs', // Output folder for GitHub Pages
    emptyOutDir: true,
  },
})

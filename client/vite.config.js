import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AyushGPT/', // Change this to match your repo name
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
})

import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep every image a separate, lazy-loadable file instead of base64 inside the JS bundle
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
})
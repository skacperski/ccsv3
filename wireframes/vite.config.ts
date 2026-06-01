import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Relume's Tailwind preset emits a `@media (min-width: 100%)` container
    // utility that lightningcss (Vite 8 default) rejects. esbuild minifies
    // leniently and the unused container rule is harmless.
    cssMinify: 'esbuild',
  },
})

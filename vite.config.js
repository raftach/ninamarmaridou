import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages deployment: base = '/ninamarmaridou/'
  // Real domain (ninamarmaridou.com): set env var VITE_BASE=/  before building
  //   e.g.  VITE_BASE=/ npm run build
  base: process.env.VITE_BASE ?? '/ninamarmaridou/',

  build: {
    rollupOptions: {
      output: {
        // Vite 8 (Rolldown) requires manualChunks to be a function, not an object.
        // Splits animation libraries into a separate chunk for parallel loading.
        manualChunks(id) {
          if (id.includes('gsap') || id.includes('lenis')) {
            return 'vendor-animation';
          }
        },
      },
    },
  },
});

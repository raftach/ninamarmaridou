import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages deployment: base = '/ninamarmaridou/'
  // Real domain (ninamarmaridou.com): set env var VITE_BASE=/  before building
  //   e.g.  VITE_BASE=/ npm run build
  base: process.env.VITE_BASE ?? '/ninamarmaridou/',

  build: {
    rollupOptions: {
      output: {
        // Split animation libraries into a separate chunk so they load in parallel
        // with the main bundle rather than blocking it.
        manualChunks: {
          'vendor-animation': ['gsap', 'lenis'],
        },
      },
    },
  },
});

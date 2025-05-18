import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use root for local dev
  server: {
    port: 5173, // Vite dev server on 5173
    open: true,
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to backend on 5000
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['charts.js']
    },
  }
});
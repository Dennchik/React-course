import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true, // ✅ карты исходников в прод-сборке
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // about: resolve(__dirname, 'page/about.html'),
        // contacts: resolve(__dirname, 'page/contacts.html'),
      },
    },
  },
});

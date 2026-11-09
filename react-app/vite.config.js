import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
  plugins: [
    react(),
    pugPlugin({
      pretty: true
    })
  ],
  base: './',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true // ✅ карты исходников в прод-сборке
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fileInclude from 'vite-file-include';

export default defineConfig({
  base: './', // 🔑 заставит Vite писать ./assets/... вместо /assets/...
  plugins: [
    react(),
    fileInclude({
      includePattern: '@@include',
      loopPattern: '@@loop',
      ifPattern: '@@if',
      baseDir: 'src',
      context: { siteName: 'Моя соцсеть' },
    }),
  ],

  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
});

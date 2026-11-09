import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fonts } from './vite/tasks/fonts';
import { fontStyle } from './vite/tasks/fontsStyle';
import { viteConvertPugInHtml } from '@mish.dev/vite-convert-pug-in-html';

// 🔹 Сначала конвертируем шрифты перед dev/build
fonts('./public/fonts');

export default defineConfig(({ command }) => {
  const isProd = command === 'build';

  return {
    plugins: [
      fontStyle(),
      viteConvertPugInHtml({
        minify: isProd,
        locals: {
          webRoot: './src',
        },
        pugOptions: {
          pretty: !isProd,
          // Убрали проблемный плагин pug-bem
        },
      }),
    ],
    base: './',
    server: {
      open: true,
    },
    css: {
      devSourcemap: true,
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: !isProd,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          // about: resolve(__dirname, 'page/about.html'),
          // contacts: resolve(__dirname, 'page/contacts.html'),
        },
      },
    },
  };
});

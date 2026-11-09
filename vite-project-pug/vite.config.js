import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
//* Plugins
import { viteConvertPugInHtml } from '@mish.dev/vite-convert-pug-in-html';
//* Tasks
import { fonts } from './vite/tasks/fonts';
import { fontStyle } from './vite/tasks/fontsStyle';
//* app
import { getPugConfig } from './vite/config/pug-config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 🔹 Сначала конвертируем шрифты перед dev/build
fonts('./public/fonts');
export default defineConfig(({ command }) => {
  const isProd = command === 'build';

  return {
    base: './',
    plugins: [viteConvertPugInHtml(getPugConfig(isProd))],
    server: {
      port: 3000,
      open: true,
    },
    // css: {
    //   // devSourcemap: true,
    //   postcss: {
    //     plugins: [
    //       //*конвертация нового синтаксиса медиа-запросов
    //     ],
    //   },
    //   // preprocessorOptions: { scss: {} },
    // },
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
    },
    build: {
      outDir: 'build',
      emptyOutDir: true,

      chunkSizeWarningLimit: 500,
      minify: 'esbuild',
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lodash') || id.includes('date-fns')) {
                return 'utils';
              }
              if (id.includes('chart.js') || id.includes('d3')) {
                return 'charts';
              }
              return 'vendor';
            }
          },
        },
      },

      optimizeDeps: {
        include: ['lodash', 'axios'],
        exclude: [],
      },
    },
  };
});

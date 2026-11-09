import pug from 'pug';
import bem from 'pug-bem';
import fs from 'fs-extra';
import path from 'path';

const srcDir = path.resolve('./src/pug');
const outDir = path.resolve('./public'); // Vite будет использовать public как корень

async function compilePug(file) {
  const srcPath = path.join(srcDir, file);
  const htmlPath = path.join(outDir, file.replace('.pug', '.html'));

  const html = pug.renderFile(srcPath, {
    pretty: true,
    plugins: [bem()],
  });

  await fs.outputFile(htmlPath, html);
  console.log(`✅ ${file} → ${htmlPath}`);
}

// Компилируем все файлы Pug в папке src/pug
async function buildAll() {
  const files = await fs.readdir(srcDir);
  const pugFiles = files.filter((f) => f.endsWith('.pug'));

  for (const file of pugFiles) {
    await compilePug(file);
  }
}

buildAll().catch((err) => console.error(err));

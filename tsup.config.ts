import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/apply-effect-schema.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  outDir: 'dist',
  target: 'es2022',
  async onSuccess() {
    const files = readdirSync('dist').filter(
      (f) => (f.endsWith('.js') || f.endsWith('.cjs')) && !f.startsWith('apply-effect-schema')
    );
    for (const file of files) {
      const filePath = join('dist', file);
      const content = readFileSync(filePath, 'utf-8');
      if (!content.startsWith('"use client"') && !content.startsWith("'use client'")) {
        writeFileSync(filePath, `"use client";\n${content}`);
      }
    }
  }
});

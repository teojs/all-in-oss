import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    name: '@teojs/all-in-oss',
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    minify: !options.watch,
    clean: true,
    splitting: true,
    dts: {
      entry: {
        'index': 'src/index.ts',
        'esdk-obs-browserjs': 'types/esdk-obs-browserjs/index.d.ts',
      },
      resolve: ['types/esdk-obs-browserjs/index.d.ts'],
    },
  }
})

import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    name: '@teojs/all-in-oss',
    entry: ['src/index.ts', 'src/plugins/**/**.ts'],
    format: ['cjs', 'esm'],
    minify: !options.watch,
    clean: true,
    dts: true,
  }
})

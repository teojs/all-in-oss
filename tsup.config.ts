import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    name: '@teojs/all-in-oss',
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    minify: !options.watch,
    clean: true,
    splitting: true,
    experimentalDts: {
      entry: {
        index: 'src/index.ts',
      },
    },
    publicDir: 'src/types',
  }
})

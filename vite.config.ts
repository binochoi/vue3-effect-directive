import { defineConfig, loadEnv } from 'vite';
import { join, resolve } from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: [resolve(__dirname, 'src/index')],
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        preserveModules: true,
      }
    },
  },
  resolve: {
    alias: {
      src: join(__dirname, './src'),
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
})

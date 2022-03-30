import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from '../package.json'

export default defineConfig({
  root: './',
  // your github repo name, default: package.name
  base: `/${pkg.name}/`,
  mode: 'production',
  plugins: [vue()],
  build: {
    outDir: './docs',
  },
})

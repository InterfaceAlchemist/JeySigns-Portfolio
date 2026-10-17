import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Set `base` to your repo name if you deploy to GitHub Pages (e.g. '/my-portfolio/')
export default defineConfig({
  plugins: [vue()],
  base: '/',
})

import { defineConfig } from 'vite'

import { resolve } from 'path'

export default defineConfig({
  base: '/TibiaTrackerSite/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        termos: resolve(__dirname, 'termos.html')
      }
    }
  }
})

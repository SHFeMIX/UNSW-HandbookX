import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock'
import { VueMcp } from 'vite-plugin-vue-mcp'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    !process.env.VITEST && process.env.NODE_ENV !== 'production'
    && viteMockServe({
      mockPath: 'src/common/services/mock',
      enable: true
    }),
    !process.env.VITEST && process.env.NODE_ENV !== 'production' && VueMcp()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

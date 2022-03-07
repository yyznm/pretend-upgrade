import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需导入
    Components({
      resolvers:[NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  base: './', // 打包路径
})

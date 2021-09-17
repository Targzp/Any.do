/*
 * @Author: your name
 * @Date: 2021-09-15 23:08:44
 * @LastEditTime: 2021-09-16 16:22:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \study_javascripts(红宝书)e:\毕设项目\Anydo-app\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
    proxy: {
      '/api': {
        target: "http://localhost:3000"
      }
    }
  },
  plugins: [vue()],
})

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: "http://localhost:3001/dist/assets/remoteEntry.js",
      },
      shared: ['vue', 'vue-router']
    })
  ],

})

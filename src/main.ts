// src/main.ts
import {createApp, defineAsyncComponent} from 'vue'
import './style.css'
import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import router from './router'
import 'vuetify/styles'

const RemoteApp = defineAsyncComponent(() => import('remote_app/App'))

createApp(App)
    .use(router)
    .use(vuetify)
    .component("RemoteApp", RemoteApp)
    .mount('#app')

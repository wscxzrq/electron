import { createApp } from 'vue'
import App from './App.vue'
import router from '@renderer/route'
import { createPinia } from 'pinia'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')

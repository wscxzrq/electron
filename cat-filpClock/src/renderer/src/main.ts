import { createApp } from 'vue'
import App from './App.vue'
import router from '@renderer/route'
import '@renderer/assets/global.scss'
const app = createApp(App)
app.use(router)
app.mount('#app')

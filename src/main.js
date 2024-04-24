import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { gsap } from 'gsap'

import { router } from './routes'
const app = createApp(App)

app.use(router)
app.mount('#app')

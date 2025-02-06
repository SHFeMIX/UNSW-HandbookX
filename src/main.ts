import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/common/assets/tailwind.css'


import App from './App.vue'
import router from './router'

// import autofit from 'autofit.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// autofit.init()

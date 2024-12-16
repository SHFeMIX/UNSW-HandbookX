import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/common/assets/tailwind.css'


import App from './App.vue'
import router from './router'

// import autofit from 'autofit.js'

// if (import.meta.env.MODE === 'development') {
//     import('./mock'); // 在开发环境中引入 mock 数据
// }

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// autofit.init()

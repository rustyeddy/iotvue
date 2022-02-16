import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Use the Vue Native Sock plug-in and perform related configuration
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import RegistersInfoBar from './components/LoadItems.vue'

const app = createApp(App)

// Регистрация компонента PersonsInfoBar глобально
app.component('RegistersInfoBar', RegistersInfoBar)

app.use(router).mount('#app')

import { createMemoryHistory, createRouter } from 'vue-router'

import Register from './components/Register.vue'
import Login from './components/Login.vue'
import RegistersInfoBar from './components/Register-Info.vue'

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
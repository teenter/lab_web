import { createMemoryHistory, createRouter } from 'vue-router'

import Register from './components/Register.vue'
import Login from './components/LoginOption.vue'
import RegistersInfoBar from './components/LoadItems.vue'

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router

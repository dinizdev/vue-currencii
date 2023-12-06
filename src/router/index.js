import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Convert from '../views/ConvertView.vue'
import Login from '../views/LoginView.vue'
import NotFound from '../views/404NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/convert', component: Convert },
  { path: '/login', component: Login },
  { path: '/register', component: () => import('../views/Register/index.vue') },
  { path: '/forgot', component: () => import('../views/Register/ForgotPassword.vue') },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

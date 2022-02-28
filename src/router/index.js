import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
  {
    path: '/',
    name: "Home",
    component: Homeview
  },
  {
    path: '/register',
    name: "Register",
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

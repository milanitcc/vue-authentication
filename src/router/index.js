import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import ProductView from '../views/ProductView.vue';

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
  },
  {
    path: '/login',
    name: "Login",
    component: LoginView
  },
  {
    path: '/products',
    name: "Product",
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home,
  },
  {
    path: '/product',
    name: 'product.List',
    component: () => import( '../views/products/List.vue'),
  },
  {
    path: '/user/login',
    name: 'user.login',
    component: () => import( '../views/Login.vue'),
  },
  {
    path: '/product/create',
    name: 'product.create',
    component: () => import( '../views/products/Form.vue'),
  },
  {
    path: '/user',
    name: 'user.list',
    component: () => import( '../views/users/List.vue'),
  },
  {
    path: '/user/create',
    name: 'user.create',
    component: () => import( '../views/users/Form.vue'),
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users"*/ '../views/Users')
  },
  {
    path: '/user/:username',
    name: 'User',
    component: () => import(/* webpackChunkName: "user"*/ '../views/User')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import(/* webpackChunkName: "video"*/ '../views/Video')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

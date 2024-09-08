import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('../views/PlaygroundView.vue')
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import('../views/BuyView.vue')
  },{
    path: '/console',
    name: 'console',
    component: () => import('../views/ConsoleView.vue')
  },{
    path: '/my',
    name: 'my',
    component: () => import('../views/MyView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

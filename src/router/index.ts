import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

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
  }, {
    path: '/console',
    name: 'console',
    component: () => import('../views/ConsoleView.vue')
  }, {
    path: '/my',
    name: 'my',
    component: () => import('../views/MyView.vue')
  }, {
    path: '/404',
    name: '404',
    component: () => import('../views/404View.vue')
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.name === 'console') {
    store.commit('setShowHeader', false)
  } else {
    store.commit('setShowHeader', true);
  }
})

export default router

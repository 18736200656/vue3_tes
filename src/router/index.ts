import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/newpage',
      name:'newPage',
      component:() => import('@/views/newPage.vue')
    },
    {
      path:'/:catchAll(.*)',
      name:'NoFund',
      component:() => import('@/views/NoFund.vue')
    }
  ]
})

export default router

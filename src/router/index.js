import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import slamBoo from '@/components/slamboo/slam-boo.vue'
import bmiCalculator from '@/components/bmi-calculator/index.vue'
import taskManager from '@/components/task-manager/Index.vue'

const routes = 
[
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/slam-boo',
    name: 'slamBoo',
    component: slamBoo
  },
  {
    path: '/bmi-calculator',
    name: 'bmiCalculator',
    component: bmiCalculator
  },
  {
    path: '/task-manager',
    name: 'taskManager',
    component: taskManager
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

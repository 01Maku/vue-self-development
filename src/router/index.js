import { createRouter, createWebHashHistory } from 'vue-router'
import LogInPage from '@/components/home/LogInPage.vue'
import HomeView from '@/components/home/HomeView.vue'
import slamBoo from '@/components/slamboo/slam-boo.vue'
import bmiCalculator from '@/components/bmi-calculator/index.vue'
import taskManager from '@/components/task-manager/Index.vue'
import Bankist from '@/components/bankist/Index.vue'

const routes = 
[
  {
    path: '/',
    redirect: '/log-in'
  },
  {
    path: '/log-in',
    name: 'LogInPage',
    component: LogInPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
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
  },
  {
    path: '/bankist',
    name: 'Bankist',
    component: Bankist
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

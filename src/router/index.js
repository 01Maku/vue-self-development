import { ref } from 'vue';
import { reactive } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router'
import NonExistentPage from '@/components/home/NonExistentPage.vue'
import LogInPage from '@/components/home/LogInPage.vue'
import HomeView from '@/components/home/HomeView.vue'

const state = reactive
({
  isLoggedIn: false,
});

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
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)',
    component: NonExistentPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// let isLoggedIn = ref(false);
// let isLoggedIn

router.beforeEach((to, from, next) => 
{
  if(to.matched.some((record) => record.meta.requiresAuth)) 
  {
    if (!state.isLoggedIn) 
    {
      alert('You are not logged in yet. Please proceed to Log in page.')
      next('/log-in');
    } 
    else 
    {
      next();
    }
  } 
  else 
  {
    next();
  }
});

export default router

export { state as isLoggedIn }
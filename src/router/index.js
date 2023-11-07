import { createRouter, createWebHashHistory } from 'vue-router'
import NonExistentPage from '@/components/home/NonExistentPage.vue'
import LogInPage from '@/components/home/LogInPage.vue'
import HomeView from '@/components/home/HomeView.vue'
import slamBoo from '@/components/slamboo/slam-boo.vue'
import bmiCalculator from '@/components/bmi-calculator/index.vue'
import taskManager from '@/components/task-manager/Index.vue'
import Bankist from '@/components/bankist/Index.vue'
import Mapty from '@/components/mapty/Index.vue'

function checkAuthorization()
{
  return false
}

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
    beforeEnter: (to, from, next) => 
    {
      const isAuthorized = checkAuthorization();
      if (isAuthorized) 
      {
        next();
      } 
      else 
      {
        alert('You are trying to access a page without authorization')
        next('/log-in');
      }
    }
  },
  {
    path: '/slam-boo',
    name: 'slamBoo',
    component: slamBoo,
    beforeEnter: (to, from, next) => 
    {
      const isAuthorized = checkAuthorization();
      if (isAuthorized) 
      {
        next();
      } 
      else 
      {
        alert('You are trying to access a page without authorization')
        next('/log-in');
      }
    }
  },
  {
    path: '/bmi-calculator',
    name: 'bmiCalculator',
    component: bmiCalculator,
    beforeEnter: (to, from, next) => 
    {
      const isAuthorized = checkAuthorization();
      if (isAuthorized) 
      {
        next();
      } 
      else 
      {
        alert('You are trying to access a page without authorization')
        next('/log-in');
      }
    }
  },
  {
    path: '/task-manager',
    name: 'taskManager',
    component: taskManager,
    beforeEnter: (to, from, next) => 
    {
      const isAuthorized = checkAuthorization();
      if (isAuthorized) 
      {
        next();
      } 
      else 
      {
        alert('You are trying to access a page without authorization')
        next('/log-in');
      }
    }
  },
  {
    path: '/bankist',
    name: 'Bankist',
    component: Bankist,
    beforeEnter: (to, from, next) => 
    {
      const isAuthorized = checkAuthorization();
      if (isAuthorized) 
      {
        next();
      } 
      else 
      {
        alert('You are trying to access a page without authorization')
        next('/log-in');
      }
    }
  },
  {
    path: '/mapty',
    name: 'Mapty',
    component: Mapty,
    beforeEnter: (to, from, next) => 
    {
      const isAuthorized = checkAuthorization();
      if (isAuthorized) 
      {
        next();
      } 
      else 
      {
        alert('You are trying to access a page without authorization')
        next('/log-in');
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NonExistentPage',
    component: NonExistentPage,
    beforeEnter: (to, from, next) => 
    {
      const isAuthorized = checkAuthorization();
      if (isAuthorized) 
      {
        next();
      } 
      else 
      {
        alert('You are trying to access a page without authorization')
        next('/log-in');
      }
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
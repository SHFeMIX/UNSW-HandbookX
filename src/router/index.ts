import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign',
      name: 'sign',
      component: () => import('@/views/sign/index.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/sign/login/index.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/sign/register/index.vue'),
        },
        {
          path: '',
          redirect: { name: 'login' }
        },
        {
          path: ':catchAll(.*)',
          redirect: { name: 'login' }
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/detail/:code',
      name: 'detail',
      component: () => import('@/views/detail/index.vue'),
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('@/views/Tab.vue')
    },
    {
      path: '',
      redirect: { name: 'login' }
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'login' }
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign',
      name: 'sign',
      component: () => import('@/views/SignBg.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/sign/Login.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/sign/Register.vue'),
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
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/detail/:code',
      name: 'detail',
      component: () => import('@/views/Detail.vue'),
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

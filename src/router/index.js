import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main/',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },

    {
      path: '/',
      redirect: '/main/'
    },

    {
      path: '/story/',
      name: 'story',
      component: () => import('../views/StoryView.vue')
    },

    {
      path: '/adventures/',
      name: 'adventures',
      component: () => import('../views/AdventuresView.vue')
    },

    {
      path: '/chars/',
      name: 'chars',
      component: () => import('../views/CharsView.vue')
    },

    {
      path: '/chars/Majima',
      name: 'majima',
      component: () => import('../views/MajimaBrancView.vue')
    },

    {
      path: '/chars/Kiru',
      name: 'kiru',
      component: () => import('../views/KiruBrancView.vue')
    },

  ]
})

export default router

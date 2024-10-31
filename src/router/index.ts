import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../../src/layouts/DashboardLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: () => import('../../src/pages/SearchImg.vue'),
      meta: {
        layout: DashboardLayout,
      },
    },
  ],
})

export default router

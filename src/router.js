import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/ProductList.vue')
  },
  {
    path: '/product/:id',
    components: {
      default: () => import('@/views/Product.vue'),
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

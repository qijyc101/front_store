import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: () => import('src/layouts/LayoutMain.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

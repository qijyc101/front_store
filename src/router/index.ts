import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', name: 'home', component: () => import('src/App.vue') },
  { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

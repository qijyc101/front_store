import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from 'vue-router';

const routes = <RouteRecordRaw[]>[
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: () => import('src/pages/MainPage.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('src/pages/AdminPage.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log('from: ', from);
//   console.log('to: ', to);
//   next()
// });

export default router;

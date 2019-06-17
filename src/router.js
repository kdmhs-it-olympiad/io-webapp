import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '홈',
      },
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('@/views/policy.vue'),
      meta: {
        title: '약관',
      },
    },
  ],
});

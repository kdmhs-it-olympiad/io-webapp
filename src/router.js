import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '홈',
      },
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('@/views/policy.vue'),
      meta: {
        title: '개인정보 처리방침',
      },
    },
  ],
});

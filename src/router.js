import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
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
      path: '/qna',
      name: 'qna',
      component: () => import('@/views/QnA.vue'),
      meta: {
        title: '질문과 답변',
        pageHero: '질문과 답변',
      },
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('@/views/Notice.vue'),
      meta: {
        title: '공지사항',
        pageHero: '공지사항',
      },
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('@/views/Info.vue'),
      meta: {
        title: '대회정보',
        pageHero: '올림피아드 대회정보',
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

router.beforeEach((to, from, next) => {
  if (to.meta.pageHero) {
    store.commit('updatePageHero', {
      show: true,
      text: to.meta.pageHero,
    });
  } else {
    store.commit('updatePageHero', {
      show: false,
      text: '',
    });
  }

  next();
});

export default router;

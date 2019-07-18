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
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import('@/views/ContestantTicket.vue'),
      props: true,
      meta: {
        title: '수험표 출력',
      },
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/AdminWrapper.vue'),
      children: [
        {
          path: '',
          name: 'admin/login',
          component: () => import('@/views/admin/Login.vue'),
        },
        {
          path: '/admin/check',
          name: 'admin/check',
          component: () => import('@/views/admin/Check.vue'),
        },
        {
          path: '/admin/notice',
          name: 'admin/notice',
          component: () => import('@/views/admin/Notice.vue'),
        },
        {
          path: '/admin/qna',
          name: 'admin/qna',
          component: () => import('@/views/admin/QnA.vue'),
        },
        {
          path: '/admin/upload',
          name: 'admin/upload',
          component: () => import('@/views/admin/Upload.vue'),
        },
      ],
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
  const splitted = to.path.trim().split('/');
  if (splitted[1] === 'admin' && splitted.length > 2 && !store.getters.isAdmin) {
    next('/admin');
    return;
  }

  next();
});

export default router;

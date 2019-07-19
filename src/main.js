import 'babel-polyfill';

import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line
import 'reset-css';
import './main.scss';

import poster from '@/assets/img/poster.jpg';
import gif from '@/assets/img/loader.gif';
import stamp from '@/assets/img/stamp.png';
import official_docs from '@/assets/img/official_docs.jpeg';

const image1 = new Image();
image1.src = poster;

const image2 = new Image();
image2.src = gif;

const image3 = new Image();
image3.src = stamp;

const image4 = new Image();
image4.src = official_docs;

Vue.config.productionTip = false;
Vue.use(AsyncComputed);

router.beforeEach((to, from, next) => {
  document.title = `IT 올림피아드 - ${to.meta.title || '페이지'}`;
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'reset-css';
import './main.scss';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = `IT 올림피아드 - ${to.meta.title || '페이지'}`;
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import VueInputMask from 'vue-inputmask';
import VueYandexMetrika from 'vue-yandex-metrika';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueInputMask.default);
Vue.use(VueYandexMetrika, {
  id: 74470234,
  env: process.env.NODE_ENV,
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

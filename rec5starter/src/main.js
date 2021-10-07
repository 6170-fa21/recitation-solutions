import Vue from 'vue';
// import VueRouter from 'vue-router';

import App from './App.vue';
// import Main from './views/Main.vue';

export const eventBus = new Vue();

Vue.config.productionTip = false;
// Vue.use(VueRouter);


new Vue({
  el: '#app',

  render: h => h(App),
});

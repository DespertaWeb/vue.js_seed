import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { store } from './store/state';
import { routes } from './routes';
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

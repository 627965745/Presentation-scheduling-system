// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuetable from 'vuetable-2'
import { routes } from './index'
import vuetify from 'vuetify'

import('../node_modules/vuetify/dist/vuetify.min.css')
import '../node_modules/vuetify/dist/vuetify.js'
Vue.use(vuetify)
Vue.use(VueRouter)
Vue.use(Vuetable)

const router = new VueRouter({
  routes,
  saveScrollPosition: true,
  mode: 'history'
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

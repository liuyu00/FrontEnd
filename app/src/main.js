// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import Qs from 'Qs';
import App from './App'
import router from './router'

axios.defaults.baseURL = 'http://localhost:8083'

let instance = axios.create({
  baseURL: 'http://localhost:8083',
  headers:{
      'Content-Type':'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
      data = Qs.stringify(data);
      return data;
  }]
});

Vue.config.productionTip = false
Vue.prototype.$axios = instance;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

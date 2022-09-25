
 require('./bootstrap');
 window.Vue = require('vue');
 import App from './App.vue';
 import VueAxios from 'vue-axios';
 import {useRoute} from 'vue-router';
 import axios from 'axios';
 import { routes } from './routes.js';

 Vue.use(VueAxios, axios);
  
 const router = new useRoute({
     mode: 'history',
     routes
 });
  
 const app = new Vue({
     el: '#app',
     router: router,
     render: h => h(App),
 });
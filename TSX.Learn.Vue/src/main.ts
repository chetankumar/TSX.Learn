import Vue from 'vue';
import App from './App.vue';

import 'jquery/dist/jquery.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './vendor/js/sb-admin-2.js'


Vue.use(BootstrapVue)

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');

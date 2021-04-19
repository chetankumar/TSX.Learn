import Vue from 'vue';
import App from './App.vue';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/plugins/pace/pace-theme-flash.css'
import './assets/plugins/jquery-scrollbar/jquery.scrollbar.css'
import './pages/css/pages.css';


import './assets/plugins/pace/pace.min.js'
import './assets/plugins/jquery-ui/jquery-ui.min.js'
import './assets/plugins/jquery/jquery-easy.js'
import './assets/plugins/jquery-scrollbar/jquery.scrollbar.min.js'

import './pages/js/pages.js';

Vue.use(BootstrapVue)

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');

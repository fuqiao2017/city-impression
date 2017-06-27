// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入静态文件
import './assets/css/mdui.min.css';
import './assets/css/base.css';
import './assets/js/jquery-3.2.1.min.js';
import './assets/js/mdui.min.js';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import reset from '../static/reset.css';
import Vue from 'vue';
import Resource from 'vue-resource';
import App from './App';
import router from './router';
Vue.use(Resource);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

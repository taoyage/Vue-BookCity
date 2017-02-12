import Vue from 'vue';
import Router from 'vue-router';
import home from 'views/home';
import detail from 'views/detail';
import reader from 'views/reader';
import rank from 'views/rank';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/detail/:id',
        name: 'detail',
        component: detail
    }, {
        path: '/reader/:id',
        name: 'reader',
        component: reader
    }, {
        path: '/rank',
        name: 'rank',
        component: rank
    }]
})

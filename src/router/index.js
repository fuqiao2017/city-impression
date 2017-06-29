import Vue from 'vue'
import Router from 'vue-router'

//pages
import Home from '@/page/Home'
import Listen from '@/page/Listen'
import See from '@/page/See'
import Sing from '@/page/Sing'

//components
import Topnav from '../components/Topnav'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: 'listen',
        children: [{
            path: '/listen',
            component: Listen
        }, {
            path: '/see',
            component: See
        }, {
            path: '/sing',
            component: Sing
        }]
    }]
})
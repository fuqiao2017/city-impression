import Vue from 'vue'
import Router from 'vue-router'

//pages
import Home from '@/page/Home'

//components

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
})
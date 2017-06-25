import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
        routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        }, {
            path: '/home',
            name: 'Home',
            component: Home
        }]
    })
    // 注册
Vue.component('my-component', {
        template: '<div>A custom component!</div>'
    })
    // 创建根实例
new Vue({
    el: '#example'
})
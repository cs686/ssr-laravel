import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = process.env.NODE_ENV !== 'server' 
    ? resolve => require(['../views/Home.vue'], resolve) 
    : require('../views/Home.vue');

const About = process.env.NODE_ENV !== 'server' 
    ? resolve => require(['../views/About.vue'], resolve) 
    : require('../views/About.vue');

const Index = process.env.NODE_ENV !== 'server'
    ? resolve => require(['../views/Index.vue'],resolve)
    : require('../views/Index.vue');

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/about',
        name: 'about',
        component: About
    },{
        path:'/index',
        name:'index',
        component:Index
    }]
})

export default router
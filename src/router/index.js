import Vue from 'vue'
import Router from 'vue-router'
import IndexImg from '@/components/IndexImg'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'IndexImg',
        component: IndexImg
    }]
})
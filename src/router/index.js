import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/examples/Home'
import CarouselEg from '@/components/examples/CarouselEg'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/carousel',
            name: 'CarouselEg',
            component: CarouselEg
        }
    ]
})
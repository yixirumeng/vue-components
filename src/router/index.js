import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/examples/Home'
import CarouselEg from '@/components/examples/CarouselEg'
import HoverFoldEg from '@/components/examples/HoverFoldEg'

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
        },
        {
            path: '/hoverFold',
            name: 'HoverFoldEg',
            component: HoverFoldEg
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/examples/Home'
import CarouselEg from '@/components/examples/CarouselEg'
import HoverFoldEg from '@/components/examples/HoverFoldEg'
import HoverPopEg from '@/components/examples/HoverPopEg'
import ClickEnlargeEg from '@/components/examples/ClickEnlargeEg'

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
        },
        {
            path: '/hoverPop',
            name: 'HoverPopEg',
            component: HoverPopEg
        },
        {
            path: '/clickEnlarge',
            name: 'ClickEnlargeEg',
            component: ClickEnlargeEg
        }
    ]
})
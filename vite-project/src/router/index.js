import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component:() => import('../views/NaiveWelcomeLayout.vue')
    },
    {
        path: '/room',
        name: 'room',
        component:() => import('../views/NaiveRoom.vue'),
        children:[{
            path:'project',
            name:'project',
            component:() => import('../views/NaiveProjectPlate.vue')
        }]
    },
]

const router = createRouter({
    // 区别于vue2的mode，vue3中将使用history属性来决定采用哪种路由模式
    // 默认为Hash模式，可设置createWebHistory模式
    history: createWebHashHistory(),
    routes
})

export default router
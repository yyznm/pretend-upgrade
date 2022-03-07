import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/win10',
        name: 'Win10',
        component: () => import('@/views/Content/Win10.vue'),
    },
    {
        path: '/win7',
        name: 'Win7',
        component: () => import('@/views/Content/Win7.vue'),
    },
    {
        path: '/mac',
        name: 'Mac',
        component: () => import('@/views/Content/Mac.vue'),
    },
    {
        path: '/xp',
        name: 'Xp',
        component: () => import('@/views/Content/Xp.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

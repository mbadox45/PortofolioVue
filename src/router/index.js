import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            // component: () => import('@/views/portofolio/Index.vue'),
            component: () => import('@/views/portofolio/layout/Index.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    // component: () => import('@/views/portofolio/components/Home.vue')
                    component: () => import('@/views/portofolio/home/Index.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/portofolio/about/Index.vue')
                    // component: () => import('@/views/portofolio/components/Resume.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/views/portofolio/contact/Index.vue')
                },
                {
                    path: '/project',
                    name: 'project',
                    component: () => import('@/views/portofolio/application/Index.vue')
                }
            ]
        },
        {
            path: '/',
            // component: () => import('@/views/portofolio/Index.vue'),
            component: () => import('@/views/portofolio2/layout/Index.vue'),
            children: [
                {
                    path: '/v2/home',
                    name: 'home2',
                    // component: () => import('@/views/portofolio/components/Home.vue')
                    component: () => import('@/views/portofolio2/home/Index.vue')
                }
            ]
        },
        {
            path: '/landing2',
            name: 'landing2',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;

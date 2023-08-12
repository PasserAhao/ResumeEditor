import {createRouter, createWebHistory} from 'vue-router'

const routes = [

    {path: '/', name: 'home', component: () => import('../views/index')},
    {
        path: '/template', name: 'template', component: () => import('../views/editResume/EditResume'),
        children: [
            {path: "", redirect: "/"},
            {path: '1', name: '1', component: () => import('../views/editResume/template/1')},
            {path: '2', name: '2', component: () => import('../views/editResume/template/2')},
            {path: 'test', name: 'test', component: () => import('../views/editResume/template/test')},
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router

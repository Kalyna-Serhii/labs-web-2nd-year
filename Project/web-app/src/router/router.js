import {createRouter, createWebHistory} from "vue-router";
// import MainPage from "@/pages/MainPage.vue";
import FAQ from "@/pages/FAQ.vue";

const routes = [
    // {
    //     path: '/',
    //     redirect: '/main'
    // },
    // {
    //     path: '/main',
    //     component: MainPage,
    //     meta: {
    //         title: 'Motor Car Wash Repair'
    //     }
    // },
    {
        path: '/FAQ',
        component: FAQ,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
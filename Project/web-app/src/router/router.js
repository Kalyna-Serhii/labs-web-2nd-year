import {createRouter, createWebHistory} from "vue-router";
import ContactsPage from "@/pages/ContactsPage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";

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
        path: '/contacts',
        component: ContactsPage,
        meta: {
            title: 'Contacts'
        }
    },
    {
        path: '/FAQ',
        component: FAQPage,
        meta: {
            title: 'FAQ'
        }
    },
    {
        path: '/register',
        component: RegisterPage,
        meta: {
            title: 'Register'
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach(to => {
    document.title = to.meta?.title ?? ''
})

export default router;
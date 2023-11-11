import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomePage,
        meta: {
            title: 'Motor Car Repair'
        }
    },
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
      path: '/login',
      component: LoginPage,
        meta: {
          title: 'Login'
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
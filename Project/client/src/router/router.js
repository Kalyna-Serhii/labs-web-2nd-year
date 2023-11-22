import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import LogoutPage from "@/pages/LogoutPage.vue";
import UsersPage from "@/pages/UsersPage.vue";
import CreateUserPage from "@/pages/CreateUserPage.vue";
import EditUserPage from "@/pages/EditUserPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";
import CreateServicePage from "@/pages/CreateServicePage.vue";
import EditServicePage from "@/pages/EditServicePage.vue";
import PackagesPage from "@/pages/PackagesPage.vue";

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
        path: '/register',
        component: RegisterPage,
        meta: {
            title: 'Register'
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
        path: '/logout',
        component: LogoutPage,
        meta: {
            title: 'Logout'
        }
    },
    {
        path: '/users',
        component: UsersPage,
        meta: {
            title: 'Users'
        }
    },
    {
        path: '/users/new',
        component: CreateUserPage,
        meta: {
            title: 'Create user'
        }
    },
    {
        path: '/user/:userId',
        component: EditUserPage,
        meta: {
            title: 'Edit user'
        }
    },
    {
        path: '/services',
        component: ServicesPage,
        meta: {
            title: 'Services'
        }
    },
    {
        path: '/services/new',
        component: CreateServicePage,
        meta: {
            title: 'Create service'
        }
    },
    {
        path: '/service/:serviceId',
        component: EditServicePage,
        meta: {
            title: 'Edit service'
        }
    },
    {
        path: '/packages',
        component: PackagesPage,
        meta: {
            title: 'Packages'
        }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach(to => {
    document.title = to.meta?.title ?? ''
})

export default router;
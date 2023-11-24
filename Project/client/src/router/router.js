import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ContactsPage from "@/pages/ReviewPage.vue";
import FAQPage from "@/pages/FAQPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import LogoutPage from "@/pages/LogoutPage.vue";
import UsersPage from "@/pages/UsersPage.vue";
import CreateUserPage from "@/pages/CreateUserPage.vue";
import EditUserPage from "@/pages/EditUserPage.vue";
import DealsPage from "@/pages/DealsPage.vue";
import CreateDealPage from "@/pages/CreateDealPage.vue";
import EditDealPage from "@/pages/EditDealPage.vue";
import CarsPage from "@/pages/CarsPage.vue";
import CreateCarPage from "@/pages/CreateCarPage.vue";
import SellCarPage from "@/pages/SellCarPage.vue";
import EditCarPage from "@/pages/EditCarPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";
import CreateServicePage from "@/pages/CreateServicePage.vue";
import EditServicePage from "@/pages/EditServicePage.vue";
import PackagesPage from "@/pages/PackagesPage.vue";
import CreatePackagePage from "@/pages/CreatePackagePage.vue";
import EditPackagePage from "@/pages/EditPackagePage.vue";

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
        path: '/deals',
        component: DealsPage,
        meta: {
            title: 'Deals'
        }
    },
    {
        path: '/deals/new',
        component: CreateDealPage,
        meta: {
            title: 'Create deal'
        }
    },
    {
        path: '/deal/:dealId',
        component: EditDealPage,
        meta: {
            title: 'Edit deal'
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
    {
        path: '/packages/new',
        component: CreatePackagePage,
        meta: {
            title: 'Create package'
        }
    },
    {
        path: '/package/:packageId',
        component: EditPackagePage,
        meta: {
            title: 'Edit package'
        }
    },
    {
        path: '/cars',
        component: CarsPage,
        meta: {
            title: 'Cars'
        }
    },
    {
        path: '/cars/new',
        component: CreateCarPage,
        meta: {
            title: 'Create car'
        }
    },
    {
        path: '/cars/sell',
        component: SellCarPage,
        meta: {
            title: 'Sell car'
        }
    },
    {
        path: '/car/:carId',
        component: EditCarPage,
        meta: {
            title: 'Edit car'
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
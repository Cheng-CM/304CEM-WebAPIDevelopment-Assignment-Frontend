import Vue from 'vue';
import Router from 'vue-router';

// import Login from '@/pages/Login/Login';
// import ErrorPage from '@/pages/Error/Error';
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
// Main
import Main from '@/components/Main.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    // mode: 'history',
    routes: [
        //   {
        //   path: '/login',
        //   name: 'Login',
        //   component: Login,
        // },
        // {
        //   path: '/error',
        //   name: 'Error',
        //   component: ErrorPage,
        // },
        {
            path: '/',
            name: 'Main',
            header: Navbar,
            component: Main,
            footer: Footer
        },
    ],
});
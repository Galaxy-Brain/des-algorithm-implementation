require('./extra.js')

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
Vue.component('App', require('./App.vue').default)
const routes = [
    {
        path:'/',
        component: Vue.component('Home', require('./pages/Home.vue').default)
    },
    {
        path:'/encrypt',
        component: Vue.component('Encrypt', require('./pages/Encrypt.vue').default)
    },
    {
        path:'/decrypt',
        component: Vue.component('Decrypt', require('./pages/Decrypt.vue').default)
    },
]




const router = new VueRouter({
    mode:'history',
    routes,
})


const app = new Vue({
    router,
}).$mount("#app")
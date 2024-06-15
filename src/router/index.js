import {createRouter, createWebHistory} from "vue-router";
import LoginComponent from "../../src/public/pages/login.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {path: '/login', component: LoginComponent},
        {path: '/', redirect: '/login'}

        ]
});

export default router;
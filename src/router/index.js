import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../../src/public/pages/login.component.vue';
import MoviesComponent from '../../src/public/pages/movies.component.vue';
import RegisterComponent from '../../src/public/pages/register.component.vue';
import BookingComponent from '../../src/public/pages/booking.component.vue'; // Asegúrate de que esta ruta sea correcta

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: LoginComponent },
        { path: '/register', component: RegisterComponent },
        { path: '/salir', redirect: '/login' },
        { path: '/movies', component: MoviesComponent },
        { path: '/booking', component: BookingComponent }, // Añadido para la vista de booking
        { path: '/', redirect: '/login' }, // Redirigir a login por defecto
    ],
});

export default router;

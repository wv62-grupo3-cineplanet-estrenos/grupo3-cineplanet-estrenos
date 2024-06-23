import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../../src/public/pages/login.component.vue';
import MoviesComponent from '../../src/public/pages/movies.component.vue';
import RegisterComponent from '../../src/public/pages/register.component.vue';
import BookAMovieComponent from "../cineplanet/pages/BookAMovie.component.vue";
import BetterOptionsComponent from "../cineplanet/pages/BetterOption.component.vue";
import PreferenceComponent from "../cineplanet/pages/PreferenceOption.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: LoginComponent },
        { path: '/register', component: RegisterComponent },
        { path: '/salir', redirect: '/login' },
        { path: '/movies', component: MoviesComponent, name: 'movies' },
        { path: '/booking', component: BookAMovieComponent },
        { path: '/better', component: BetterOptionsComponent },
        { path: '/preference', component: PreferenceComponent },

        { path: '/', redirect: '/login' }, // Redirige a '/login' por defecto
    ],
});

export default router;

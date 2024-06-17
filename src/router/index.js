import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../../src/public/pages/login.component.vue';
import MoviesComponent from '../../src/public/pages/movies.component.vue';
import RegisterComponent from '../../src/public/pages/register.component.vue';
//import BookingComponent from '../../src/public/pages/booking.component.vue';
import BookAMovieComponent from "../cineplanet/pages/BookAMovie.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: LoginComponent },
        { path: '/register', component: RegisterComponent },
        { path: '/salir', redirect: '/login' },
        { path: '/movies', component: MoviesComponent, name: 'movies'  },
       // { path: '/booking', component: BookingComponent },
        { path: '/booking', component: BookAMovieComponent},
        { path: '/', redirect: '/login' },


    ],
});

export default router;

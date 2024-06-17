import {createRouter, createWebHistory} from "vue-router";
import LoginComponent from "../../src/public/pages/login.component.vue";
import MoviesComponent from "../../src/public/pages/Movies.component.vue";
import RegisterComponent from "../../src/public/pages/Register.component.vue";
import BookAMovieComponent from  "../../src/cineplanet/pages/BookAMovie.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: LoginComponent},
        {path: '/register', component: RegisterComponent },

        {path: '/salir', redirect: '/login'},

        {path: '/movies', component: MoviesComponent, name: 'movies'},

        {path:'/book-a-movie', component: BookAMovieComponent},

        {path: '/', redirect: '/login'}

    ]
});

export default router;

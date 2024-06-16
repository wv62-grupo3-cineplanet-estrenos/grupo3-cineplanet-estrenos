<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
const router = useRouter();

const navigateToLogin = () => {
  router.push('/login');
};
// Información de las películas
const movies = ref([
  {
    title: "La Piel Mas Temida",
    genre: "Drama",
    duration: "1h 50min",
    rating: "+14",
    image: "src/public/imagen/movie1.jpeg",
    status: "Estreno"
  },
  {
    title: "Profesion Peligro",
    genre: "Acción",
    duration: "1h 55min",
    rating: "+14",
    image: "ruta_de_la_imagen_2",
    status: "Estreno"
  },
  {
    title: "Spy X Family Codigo: Blanco",
    genre: "Anime",
    duration: "2h",
    rating: "+14",
    image: "ruta_de_la_imagen_3",
    status: "Estreno"
  },
  {
    title: "Arácnidos",
    genre: "Terror",
    duration: "1h 50min",
    rating: "+14",
    image: "ruta_de_la_imagen_4",
    status: "Estreno"
  },
  {
    title: "Contra Todos",
    genre: "Ciencia Ficción",
    duration: "2h",
    rating: "+14",
    image: "ruta_de_la_imagen_5",
    status: "Estreno"
  },
  {
    title: "Desafiantes",
    genre: "Drama",
    duration: "2h 10min",
    rating: "+14",
    image: "ruta_de_la_imagen_6",
    status: "Estreno"
  }
]);
</script>

<template>
  <div>
    <header>
      <h1>cineplanet</h1>
      <p>Bienvenido Julio Hinoztroza</p>
      <button type="button" @click="navigateToLogin">salir</button>
    </header>
    <h2>Av. Tudela y Varela 419</h2>
    <h3>Movies</h3>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.title" class="movie-card">
        <img :src="movie.image" alt="movie poster">
        <div class="details">
          <h4>{{ movie.title }}</h4>
          <p>{{ movie.genre }}, {{ movie.duration }}, {{ movie.rating }}</p>
          <button>Select</button>
        </div>
        <span class="status">{{ movie.status }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #002244;
  color: white;
  padding: 10px;
}

header h1 {
  margin: 0;
}

header button {
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.movie-card {
  border: 1px solid #ddd;
  padding: 10px;
  width: 150px;
  text-align: center;
  position: relative;
}

.movie-card img {
  width: 100%;
  height: auto;
}

.details {
  margin-top: 10px;
}

.status {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  padding: 2px 5px;
}
</style>

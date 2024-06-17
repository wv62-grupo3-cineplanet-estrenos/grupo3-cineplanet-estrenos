<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToLogin = () => {
  router.push('/login');
};

// Información de las películas
const movies = ref([
  {
    title: "M3GAN",
    genre: "Drama",
    duration: "1h 50min",
    rating: "+14",
    image: "src/public/imagen/imagenes_estrenos/megan.jpeg",
    status: "Estreno"
  },
  {
    title: "Creed III",
    genre: "Acción",
    duration: "1h 55min",
    rating: "+14",
    image: "src/public/imagen/imagenes_estrenos/creed_lll.jpeg",
    status: "Estreno"
  },
  {
    title: "Spy X Family Codigo: Blanco",
    genre: "Anime",
    duration: "2h",
    rating: "+14",
    image: "src/public/imagen/imagenes_estrenos/spy.jpeg",
    status: "Estreno"
  },
  {
    title: "Oppenheimer",
    genre: "Terror",
    duration: "1h 50min",
    rating: "+14",
    image: "src/public/imagen/imagenes_estrenos/openhaimer.jpeg",
    status: "Estreno"
  },
  {
    title: "Babylon",
    genre: "Ciencia Ficción",
    duration: "2h",
    rating: "+14",
    image: "src/public/imagen/imagenes_estrenos/Babylon.jpeg",
    status: "Estreno"
  },
  {
    title: "Women Talking",
    genre: "Drama",
    duration: "2h 10min",
    rating: "+14",
    image: "src/public/imagen/imagenes_estrenos/women_talking.jpeg",
    status: "Estreno"
  }
]);

const navigateToBooking = () => {
  router.push('/booking');
};
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
          <button @click="navigateToBooking">Select</button>
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

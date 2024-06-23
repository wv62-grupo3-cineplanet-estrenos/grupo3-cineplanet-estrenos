<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.username) {
    username.value = user.username;
  }
});

const navigateToLogin = () => {
  router.push('/login');
};

const ubicaciones = ref([
  "Av. Tudela y Varela 419",
  "Av. Larco 812",
  "Jiron de la Union 421",
  "Av. Pardo y Aliaga 640"
]);
const ubicacionSeleccionada = ref(ubicaciones.value[0]);
const mostrarDesplegable = ref(false);

const selectMovie = () => {
  router.push('/booking');
};

const toggleDesplegable = () => {
  mostrarDesplegable.value = !mostrarDesplegable.value;
};

const cambiarUbicacion = (ubicacion) => {
  ubicacionSeleccionada.value = ubicacion;
  mostrarDesplegable.value = false;
};

const peliculas = ref([
  { title: 'M3GAN', genre: 'Drama', duration: '1h 50min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/megan.webp', status: 'Estreno' },
  { title: 'Creed III', genre: 'Acción', duration: '1h 55min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/creed_lll.webp', status: 'Estreno' },
  { title: 'Spy X Family Codigo: Blanco', genre: 'Anime', duration: '2h', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/spy.webp', status: 'Estreno' },
  { title: 'Oppenheimer', genre: 'Terror', duration: '1h 50min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/openhaimer.webp', status: 'Estreno' },
  { title: 'Babylon', genre: 'Ciencia Ficción', duration: '2h', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/babylon.webp', status: 'Estreno' },
  { title: 'Women Talking', genre: 'Drama', duration: '2h 10min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/women_talking_1.webp', status: 'Estreno' },
  { title: 'Ant-Man and the Wasp: Quantumania', genre: 'Acción', duration: '2h 10min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/ant-man.webp', status: 'Estreno' },
  { title: 'Cocaine Bear', genre: 'Comedia', duration: '1h 35min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/cocaine_bear.webp', status: 'Estreno' },
  { title: 'Wonka', genre: 'Fantasía', duration: '2h', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/wonka.webp', status: 'Estreno' },
  { title: 'The Marvels', genre: 'Acción', duration: '2h 5min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/the_marvels.webp', status: 'Estreno' }
]);

const currentStartIndex = ref(0);
const maxVisible = 10;

const nextMovies = () => {
  if (currentStartIndex.value + maxVisible < peliculas.value.length) {
    currentStartIndex.value += maxVisible;
  }
};

const prevMovies = () => {
  if (currentStartIndex.value - maxVisible >= 0) {
    currentStartIndex.value -= maxVisible;
  }
};
</script>

<template>
  <div class="container">
    <header class="image-header">
      <div class="header-content">
        <img src="../imagen/inicio_pagina.webp" alt="Initial Image" class="initial-image">
      </div>
    </header>
    <div class="container-movies">

      <div class="welcome-message">
        <p>Welcome {{ username }}</p>
      </div>

      <div class="logout-button">
        <button type="button" @click="navigateToLogin">Excit</button>
      </div>

      <div class="ubicacion">
        <span>{{ ubicacionSeleccionada }}</span>
        <button class="dropdown-btn" @click="toggleDesplegable">▼</button>
        <div class="dropdown" v-if="mostrarDesplegable">
          <ul>
            <li v-for="ubicacion in ubicaciones" :key="ubicacion" @click="cambiarUbicacion(ubicacion)">
              {{ ubicacion }}
            </li>
          </ul>
        </div>
      </div>
      <h3>Películas</h3>
      <div class="carousel">
        <button @click="prevMovies" :disabled="currentStartIndex === 0">⬅️</button>
        <div class="carousel-inner">
          <div class="movie" v-for="(movie, index) in peliculas.slice(currentStartIndex, currentStartIndex + maxVisible)" :key="movie.title">
            <img :src="movie.image" :alt="movie.title">
            <div class="movie-details">
              <h4>{{ movie.title }}</h4>
              <p>{{ movie.genre }}, {{ movie.duration }}, {{ movie.rating }}</p>
              <span class="status">{{ movie.status }}</span>
            </div>
            <button class="select-btn" @click="selectMovie">Seleccionar</button>

          </div>
        </div>
        <button @click="nextMovies" :disabled="currentStartIndex + maxVisible >= peliculas.length">➡️</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Evitar el scroll */
  background-color: #042c60; /* Color azul de fondo */
}


header.image-header {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0;
  background: none;
}

.header-content {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto; /* Centrar el contenido */
}

.initial-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.welcome-message {
  position: absolute;
  top: 150px; /* Ajusta la posición vertical según sea necesario */
  left: 52%; /* Centra horizontalmente */
  transform: translateX(-50%); /* Corrige el centrado */
  text-align: center;
  font-size: 3em; /* Tamaño de fuente deseado */
}


.logout-button {
  position: absolute;
  top: 210px; /* Ajusta la posición vertical según sea necesario */
  right: 30px; /* Ajusta la posición horizontal según sea necesario */
}

.logout-button button {
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.ubicacion {
  margin: 20px 0;
  display: flex;
  align-items: center;
}

.ubicacion span {
  font-size: 1.2em;
  margin-right: 10px;
}

.dropdown-btn {
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.dropdown {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: absolute;
  margin-top: 5px;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

.carousel {
  display: flex;
  align-items: center;
}

.carousel-inner {
  display: flex;
  overflow: hidden;
  width: calc(100% - 80px); /* Espacio para los botones */
}

.movie {
  flex: 0 0 auto;
  margin: 0 10px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  padding: 10px;
}

.movie img {
  width: 100px;
  height: auto;
  border-radius: 5px;
}

.movie-details {
  margin-top: 10px;
}

.status {
  background-color: red;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
}

.select-btn {
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:not(:disabled) {
  transition: transform 0.2s;
}

button:not(:disabled):hover {
  transform: scale(1.1);
}
</style>



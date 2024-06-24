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
const nuevaUbicacion = ref('');

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

const agregarUbicacion = () => {
  if (nuevaUbicacion.value.trim() !== '') {
    ubicaciones.value.push(nuevaUbicacion.value.trim());
    cambiarUbicacion(nuevaUbicacion.value.trim());
    nuevaUbicacion.value = '';
  }
};

const peliculas = ref([
  { title: 'M3GAN', genre: 'Drama', duration: '1h 50min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/megan.webp', status: 'Estreno' },
  { title: 'Creed III', genre: 'Acción', duration: '1h 55min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/creed_lll.webp', status: 'Estreno' },
  { title: 'Barbie', genre: 'Infantil', duration: '1h 30min', rating: '+6', image: 'src/public/imagen/imagen_estreno_web/barbie.webp', status: 'Estreno' },
  { title: 'Oppenheimer', genre: 'Terror', duration: '1h 50min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/openhaimer.webp', status: 'Estreno' },
  { title: 'Babylon', genre: 'Ciencia Ficción', duration: '2h', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/babylon.webp', status: 'Estreno' },
  { title: 'Women Talking', genre: 'Drama', duration: '2h 10min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/women_talking_1.webp', status: 'Estreno' },
  { title: 'Ant-Man and the Wasp: Quantumania', genre: 'Acción', duration: '2h 10min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/ant-man.webp', status: 'Estreno' },
  { title: 'Cocaine Bear', genre: 'Comedia', duration: '1h 35min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/cocaine_bear.webp', status: 'Estreno' },
  { title: 'Wonka', genre: 'Fantasía', duration: '2h', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/wonka_1.webp', status: 'Estreno' },
  { title: 'The Marvels', genre: 'Acción', duration: '2h 5min', rating: '+14', image: 'src/public/imagen/imagen_estreno_web/the_marvels.webp', status: 'Estreno' }
]);

const currentStartIndex = ref(0);
const maxVisible = 5;

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
    <div class="main-content"> <!-- Div que aplica fondo blanco -->
      <div class="welcome-message">
        <p>Bienvenido {{ username }}</p>
      </div>
      <div class="logout-button">
        <button type="button" @click="navigateToLogin">Salir</button>
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
          <div class="agregar-ubicacion">
            <input type="text" v-model="nuevaUbicacion" placeholder="Agregar nueva ubicación">
            <button @click="agregarUbicacion">Agregar</button>
          </div>
        </div>
      </div>
      <h3>Películas</h3>
      <div class="carousel">
        <button @click="prevMovies" :disabled="currentStartIndex === 0">⬅️</button>
        <div class="carousel-inner" :class="{ 'horizontal-align': peliculas.length > maxVisible }">
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

    <!-- Sección final con fondo celeste -->
    <div class="final-content" style="background-color: #ffffff; height: 200px;">
      <!-- Contenido de la sección final aquí -->
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

.image-header {
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

.main-content {
  background-color: white; /* Fondo blanco para el contenido principal */
  padding: 20px;
}

.welcome-message {
  text-align: center;
  font-size: 2.5em; /* Tamaño de fuente deseado */
  color: #000000; /* Mantener el color de texto */
  margin-top: -40px; /* Espacio superior */
  margin-bottom: -40px; /* Reducir espacio debajo del mensaje */
}

.logout-button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
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
  color: #042c60;
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
  background-color: #ddd;
}

.agregar-ubicacion {
  display: flex;
  padding: 20px;
}

.agregar-ubicacion input {
  flex: 1;
  padding: 5px;
  margin-right: 5px;
}

.agregar-ubicacion button {
  padding: 5px;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-inner {
  display: flex;
  flex-wrap: wrap; /* Permitir que las películas se envuelvan en múltiples líneas */
  overflow: hidden;
  max-width: 90%;
  justify-content: space-around; /* Alineación horizontal de los botones */

}

.carousel-inner.horizontal-align {
  display: flex;
  overflow: hidden;
  max-width: 90%;
  justify-content: space-around; /* Alineación horizontal de los botones */
}


.movie {
  flex: 0 0 calc(20% - 20px); /* Ajustar el ancho de cada película */
  margin: 0 10px;
  text-align: center;
  display: flex; /* Hacer que los elementos dentro de .movie se alineen verticalmente */
  flex-direction: column; /* Alinear los elementos de forma vertical */
}

.movie img {
  width: 100%;
  height: auto; /* Cambiar la altura de la imagen a automática para mantener la proporción */
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px; /* Agregar margen inferior para separar la imagen del botón */
}


.movie-details {
  margin: 10px 0;
  color: #042c60; /* Mantener el color de texto */
}

.status {
  color: #000000;
}

.select-btn {
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 5px 10px; /* Reducir el padding para disminuir el espacio */
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.carousel button {
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.final-content {
  background-color: #ffffff; /* Fondo celeste */
  padding: 20px;
  margin-top: 0; /* Agrega margen superior para separar el contenido superior */
}

.main-content {
  background-color: white; /* Fondo blanco para el contenido principal */
  padding: 10px;
  margin-top: 10px; /* Agrega margen superior para separar el contenido superior */
}

.carousel button:disabled {
  color: gray;
}
</style>
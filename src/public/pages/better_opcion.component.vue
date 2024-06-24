<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const cinemas = ref([
  {
    id: 1,
    name: 'CP Alcazar',
    address: 'Av. Santa Cruz 814-816',
    type: '2D, REGULAR',
    image: 'src/public/imagen/imagen_cines/CP_Alcazar.webp',
    map: 'path-to-map-image.png',
    distance: '8 min (850m)'
  },
  {
    id: 2,
    name: 'CP Brazil',
    address: 'Av. La Brazil 714',
    type: '2D, REGULAR, 3D',
    image: 'src/public/imagen/imagen_cines/CP_brasil.webp',
    map: 'path-to-map-san-miguel.png',
    distance: '12 min (2.1km)'
  },
  // Añade más cines aquí
]);

const currentOptionIndex = ref(0);

const navigateToLogin = () => {
  router.push('/login');
};

const confirmOption = () => {
  router.push('/confirmation');
};

const nextOption = () => {
  currentOptionIndex.value = (currentOptionIndex.value + 1) % cinemas.value.length;
};

const goBack = () => {
  currentOptionIndex.value = (currentOptionIndex.value - 1 + cinemas.value.length) % cinemas.value.length;
};

const currentCinema = computed(() => cinemas.value[currentOptionIndex.value]);

</script>

<template>
  <div class="cineplanet-page">
    <header>
      <h1>Cineplanet</h1>
      <p>Bienvenido a la reserva rápida de película</p>
      <button type="button" @click="navigateToLogin" style="color:white">Salir</button>
    </header>

    <div class="content">
      <h1>Better Option</h1>
      <div class="option-number">
        <span class="number">{{ currentCinema.id }}</span>
      </div>
      <div class="option-details">
        <div class="cinema-info">
          <img :src="currentCinema.image" :alt="currentCinema.name"/>
          <p>{{ currentCinema.name }}</p>
          <p>{{ currentCinema.address }}</p>
          <p>{{ currentCinema.type }}</p>
        </div>
        <div class="map">
          <img :src="currentCinema.map" :alt="'Map to ' + currentCinema.name"/>
          <p>{{ currentCinema.distance }}</p>
        </div>
      </div>
      <div class="actions">
        <button @click="confirmOption">Confirm</button>
        <button @click="nextOption">Next Option</button>
        <button @click="goBack">Back</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cineplanet-page {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #042c60;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #002244;
  color: white;
  padding: 10px;
}

header button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.option-number .number {
  font-size: 2em;
  background-color: lightgreen;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 20px;
}

.option-details {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.cinema-info {
  margin-right: 50px;
  text-align: left;
}

.cinema-info img {
  width: 200px;
  height: auto;
}

.map {
  text-align: left;
}

.map img {
  width: 200px;
  height: auto;
}

.actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.actions button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #FF6347;
  color: white;
  border: none;
  border-radius: 5px;
}

.actions button:hover {
  box-shadow: inset 0 0 0 4px rgb(12, 248, 248);
  transform: scale(0.98);
}
</style>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const date = ref('');
const seats = ref(1);
const dni = ref('');

const navigateToMovies = () => {
  router.push('/movies');
};

const navigateToBetterOptions = () => {
  router.push('/better-options'); // Navega a la ruta '/better-options' al hacer clic en "Better Options"
};

const navigateToPreferenceOptions = () => {
  router.push('/preference-options');
};

</script>

<template>
  <div class="booking-container">
    <header>
      <img :src="'../public/imagen/inicio_pagina.webp'" alt="Header image">
    </header>
    <div class="booking-form">
      <h1>Booking</h1>
      <form>
        <div class="form-group">
          <label for="date">Select Date</label>
          <input type="date" id="date" v-model="date" placeholder="dd/mm/yy">
        </div>
        <div class="form-group">
          <label for="seats">Select number of seats</label>
          <input type="number" id="seats" v-model="seats" min="1" placeholder="Example: 2">
        </div>
        <div class="form-group">
          <label for="dni">Confirm your ID</label>
          <input type="text" id="dni" v-model="dni" placeholder="XXXXXXXXX">
        </div>
        <button type="button" @click="navigateToBetterOptions">Better Options</button>
        <button type="button" @click="navigateToPreferenceOptions">Preference Options</button>
        <div class="form-actions">
          <button type="submit">Confirm</button>
          <button type="button" @click="navigateToMovies">Back</button>
        </div>
      </form>
    </div>
    <footer>
      <img src="../imagen/final_pagina.png" alt="Footer image">
    </footer>
  </div>
</template>

<style scoped>
.booking-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #002244;
  color: white;
  padding: 10px;
}

header img {
  width: 100%;
  height: 100px; /* Ajusta esta altura según tus necesidades */
  object-fit: cover;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #002244;
}

footer img {
  width: 100%;
  height: 100px; /* Ajusta esta altura según tus necesidades */
  object-fit: cover;
}

.booking-form {
  flex: 1;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(169, 225, 220, 0.71);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: rgba(132, 170, 227, 0.68); /* Color de fondo azul */
  color: #000000; /* Color del texto blanco */
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: rgba(43, 163, 184, 0.76); /* Color de fondo azul oscuro al pasar el ratón */
}

button:focus {
  outline: none;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}
</style>

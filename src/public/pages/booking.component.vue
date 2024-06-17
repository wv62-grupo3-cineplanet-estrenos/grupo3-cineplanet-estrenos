<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const date = ref('');
const seats = ref(1);
const dni = ref('');

const navigateToMovies = () => {
  router.push('/movies');
};
</script>

<template>
  <div class="booking-container">
    <header>
      <img src="../imagen/inicio_pagina.png" alt="Header image">
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
          <label for="dni">Confirma su DNI</label>
          <input type="text" id="dni" v-model="dni" placeholder="XXXXXXXXX">
        </div>
        <pv-button type="button">Better Options</pv-button>
        <pv-button type="button">Preference Options</pv-button>
        <div class="form-actions">
          <pv-button type="submit">Confirm</pv-button>
          <pv-button type="button" @click="navigateToMovies">Back</pv-button>
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

.form-actions {
  display: flex;
  justify-content: space-between;
}
</style>

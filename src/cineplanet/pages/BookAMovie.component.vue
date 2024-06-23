<template>
  <div>
    <header>
      <h1>Cineplanet</h1>
      <p>Bienvenido a la reserva rápida de película</p>
      <button type="button" @click="navigateToLogin" style="color: white;">Salir</button>
    </header>

    <div class="booking-container">
      <div class="p-col-12 p-md-6">
        <h1>Booking</h1>
        <form @submit.prevent="submitForm" class="booking-form">
          <pv-calendar v-model="formData.date" dateFormat="dd/mm/yy" inputId="date" class="input-field" />
          <pv-input-text v-model="formData.seats" placeholder="Número de asientos" inputId="seats" class="input-field" />
          <pv-input-text v-model="formData.dni" placeholder="Confirma tu DNI" inputId="dni" class="input-field" />

          <div class="button-row">
            <pv-button label="Better Options"
                       class="p-button-outlined"
                       :class="{ 'p-button-secondary': selectedOption === 'better' }"
                       @click="selectOption('better')" />
            <pv-button label="Preference Options"
                       class="p-button-outlined"
                       :class="{ 'p-button-secondary': selectedOption === 'preference' }"
                       @click="selectOption('preference')" />
          </div>

          <div class="button-row">
            <pv-button label="Confirmar" type="submit" class="p-button-success" />
            <pv-button label="Volver" class="p-button-secondary" @click="goBack" />
          </div>
        </form>
      </div>
    </div>

    <footer style="padding-top: 5%;">
      <img src="../../public/imagen/fin_pagina.webp" alt="Footer image" width="1435" />
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = ref({
  date: null,
  seats: '',
  dni: ''
});

const selectedOption = ref('');

const submitForm = () => {
  console.log("Submitting form with:", formData.value);

  if (selectedOption.value === 'better') {
    console.log("Navigating to better options route...");
    router.push('/better');
  } else if (selectedOption.value === 'preference') {
    console.log("Navigating to preference options route...");
    router.push('/preference');
  }
};

const selectOption = (option) => {
  selectedOption.value = option;
};

const goBack = () => {
  console.log("Going back...");
  router.push({name: 'movies'}); // Navega usando el nombre de la ruta
};

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #002244;
  color: white;
  padding: 10px;
}

.booking-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.booking-form {
  display: flex;
  flex-direction: column;
}

.input-field {
  margin-bottom: 20px;
}

.button-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.p-button-success {
  background-color: green;
}
</style>

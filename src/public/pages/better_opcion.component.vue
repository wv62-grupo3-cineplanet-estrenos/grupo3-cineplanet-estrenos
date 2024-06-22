<script setup>
import { ref } from 'vue';

const options = ref([
  { id: 1, title: 'CP Alcazar', address: 'CP Alcazar #5815', image: 'url_to_image', map: 'url_to_map' },
  { id: 2, title: 'CP Salaverry', address: 'CP Salaverry #391', image: 'url_to_image', map: 'url_to_map' },
  { id: 3, title: 'CP Risso', address: 'CP Risso #2596', image: 'url_to_image', map: 'url_to_map' }
]);

const preference = ref({
  id: 1, title: 'CP Brazil', address: 'CP Brazil #703', image: 'url_to_image', map: 'url_to_map'
});

const currentOption = ref(0);

function nextOption() {
  if (currentOption.value < options.value.length - 1) {
    currentOption.value++;
  }
}

function previousOption() {
  if (currentOption.value > 0) {
    currentOption.value--;
  }
}
</script>

<template>
  <div class="options-container">
    <div v-for="option in options" :key="option.id" class="option-card" v-show="option.id === options[currentOption].id">
      <img :src="option.image" :alt="option.title" class="location-image">
      <h3>{{ option.title }}</h3>
      <p>{{ option.address }}</p>
      <img :src="option.map" alt="map location">
      <div>
        <button @click="previousOption">Previous Option</button>
        <button @click="nextOption">Next Option</button>
      </div>
    </div>
    <div class="preference">
      <img :src="preference.image" :alt="preference.title" class="location-image">
      <h3>{{ preference.title }}</h3>
      <p>{{ preference.address }}</p>
      <img :src="preference.map" alt="map location">
    </div>
  </div>
</template>

<style scoped>
/* Estilos según sea necesario */
</style>

<script setup>

</script>

<template>
  <header>
    <h1>Cineplanet</h1>
    <p>Bienvenido a la reserva rapida de pelicula</p>
    <button type="button" @click="navigateToLogin" style="color:white">salir</button>
  </header>
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
</style>
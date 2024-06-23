<template>
  <div class="page-container">
    <header class="image-header">
      <div class="header-content">
        <img src="../imagen/inicio_pagina.webp" alt="Initial Image" class="initial-image">
      </div>
    </header>
    <div class="register-container">
      <div class="register-box">
        <img src="../imagen/logo_cine.webp" alt="Cineplanet Logo" class="logo-image">
        <form @submit.prevent="registerUser">
          <div class="input-group">
            <label for="name">Name</label>
            <input id="name" v-model="name" type="text" placeholder="Enter your name" required>
          </div>
          <div class="input-group">
            <label for="lastname">Lastname</label>
            <input id="lastname" v-model="lastname" type="text" placeholder="Enter your lastname" required>
          </div>
          <div class="input-group">
            <label for="username">Username</label>
            <input id="username" v-model="username" type="text" placeholder="Enter your username" required>
          </div>
          <div class="input-group">
            <label for="direction">Direction</label>
            <input id="direction" v-model="direction" type="text" placeholder="Enter your direction" required>
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" placeholder="Enter your password" required>
          </div>
          <button type="submit">Register</button>
        </form>
        <button type="button" @click="goToLogin">Go to Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();

const name = ref('');
const lastname = ref('');
const username = ref('');
const direction = ref('');
const password = ref('');

const registerUser = () => {
  const user = {
    name: name.value,
    lastname: lastname.value,
    username: username.value,
    direction: direction.value,
    password: password.value,
  };

  localStorage.setItem('user', JSON.stringify(user));

  Swal.fire({
    title: 'Registro exitoso',
    text: '¡Bienvenido a Cineplanet!',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  }).then(() => {
    router.push('/login');
  });
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
/* Establecer la página completa como fija y sin scroll */
.page-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Evitar el scroll */
  background-color: #042c63; /* Color azul de fondo */
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
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
}

.logo-image {
  max-width: 360px; /* Ajusta el tamaño máximo del logo según tu diseño */
}

.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 140px); /* Ajustar para que el formulario esté centrado entre el header */
  background-color: #fff;
}

.register-box {
  background-color: white;
  padding: 20px 60px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px; /* Permitir ajustar el ancho del contenedor */
  width: 100%;
  height: 800px; /* Permitir ajustar la altura del contenedor */
  box-sizing: border-box; /* Incluir el padding dentro del tamaño del contenedor */

}

.register-box h1 {
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #042c63;
  display: none; /* Oculta el h1 si usas un logo de imagen */
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 1.1em;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

button {
  width: 100%;
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 5px;
  margin-top: 15px;
}

button:hover {
  box-shadow: inset 0 0 0 4px rgb(12, 248, 248); /* Borde interno celeste */
  transform: scale(0.98); /* Reducir ligeramente el tamaño */
}

button[type="button"] {
  margin-top: 10px;
  background-color: #fd6246;
}

button[type="button"]:hover {
  background-color: #fd6246;
}

</style>

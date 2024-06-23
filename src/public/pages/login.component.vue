<template>
  <div class="page-container">
    <header class="image-header">
      <div class="header-content">
        <img src="../imagen/inicio_pagina.webp" alt="Initial Image" class="initial-image">
      </div>
    </header>
    <div class="login-container">
      <div class="login-box">
        <img src="../imagen/logo_cine.webp" alt="Cineplanet Logo" class="logo-image">
        <form @submit.prevent="loginUser">
          <div class="input-group">
            <label for="username">Username</label>
            <input id="username" v-model="username" type="text" placeholder="Enter your username" required>
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" placeholder="Enter your password" required>
          </div>
          <button type="submit">Login</button>
        </form>
        <button @click="navigateToRegister">Register</button>
      </div>
    </div>
    <footer class="image-footer">
      <div class="footer-content">
        <img src="../imagen/fin_pagina.webp" alt="Final Image" class="final-image">
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();

const username = ref('');
const password = ref('');

const loginUser = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.username === username.value && storedUser.password === password.value) {
    Swal.fire({
      title: 'Inicio de sesión exitoso',
      text: '¡Bienvenido a Cineplanet!',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      router.push('/movies');
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Nombre de usuario o contraseña incorrectos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
};

const navigateToRegister = () => {
  router.push('/register');
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
  background-color: #042c60; /* Color azul de fondo */
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

header.image-header, footer.image-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0;
  background: none;
}

.header-content, .footer-content {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto; /* Centrar el contenido */
}

.initial-image, .final-image {
  width: 100%;
  height: auto;
}

.logo-image {
  max-width: 360px; /* Ajusta el tamaño máximo del logo según tu diseño */
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 280px);
  background-color: #fff;
}

.login-box {
  background-color: white;
  padding: 20px 60px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin-top: -20px;
}

.login-box h1 {
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
</style>

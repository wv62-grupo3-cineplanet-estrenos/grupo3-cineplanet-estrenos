<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');

const loginUser = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.username === username.value && storedUser.password === password.value) {
    alert("Inicio de sesión exitoso");
    router.push('/movies');
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
};

const navigateToRegister = () => {
  router.push('/register');
};
</script>

<template>
  <div class="login-container">
    <header>
      <img src="C:\Users\Racso\Documents\GitHub\grupo3-cineplanet-estrenos\src\public\imagen\imagen_logo.jpg" alt="Cineplanet logo" class="logo">
    </header>
    <div class="login-box">
      <h1>Cineplanet</h1>
      <form @submit.prevent="loginUser">
        <div class="input-group">
          <label for="username">Nombre de usuario</label>
          <input id="username" v-model="username" type="text" placeholder="Ingrese su nombre de usuario" required>
        </div>
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input id="password" v-model="password" type="password" placeholder="Ingrese su contraseña" required>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    <footer>
      <img src="../imagen/imagen_logo.jpg" alt="Cineplanet logo" class="footer-logo">
    </footer>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
}

header, footer {
  width: 100%;
  background-color: #042c63;
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.logo, .footer-logo {
  max-width: 200px;
}

.login-box {
  background-color: white;
  padding: 40px 60px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin-top: -20px; /* Ajuste para alinear con el logo del header */
}

.login-box h1 {
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #042c63;
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
  background-color: #FF4500;
}
</style>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const registerUser = () => {
  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const user = {
    username: username.value,
    password: password.value,
  };

  localStorage.setItem('user', JSON.stringify(user));
  alert("Registro exitoso");
  router.push('/login');
};
</script>

<template>
  <div class="register-container">
    <header>
      <img src="../imagen/imagen_logo.jpg" alt="Cineplanet logo" class="logo">
    </header>
    <div class="register-box">
      <h1>Registro</h1>
      <form @submit.prevent="registerUser">
        <div class="input-group">
          <label for="username">Username</label>
          <input id="username" v-model="username" type="text" placeholder="Enter your username" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" placeholder="Enter your password" required>
        </div>
        <div class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Confirm your password"
                 required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

header {
  width: 100%;
  background-color: #042c63;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.logo {
  max-width: 200px;
}

.register-box {
  background-color: white;
  padding: 40px 60px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.register-box h1 {
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

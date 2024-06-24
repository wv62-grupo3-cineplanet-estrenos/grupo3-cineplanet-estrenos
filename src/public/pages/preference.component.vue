<template>
  <div class="cineplanet-page">
    <header>
      <h1>Cineplanet</h1>
      <p>Bienvenido a la reserva rápida de película</p>
      <button type="button" @click="navigateToLogin" style="color:white">Salir</button>
    </header>

    <div>
      <h1>Encuentra tu cine preferido</h1>
      <input v-model="dni" @input="fetchPreferences" placeholder="Ingrese su DNI">
      <button @click="findPreferredCinema">Buscar Cine Preferido</button>
      <div v-if="cinema">
        <h2>{{ cinema.name }}</h2>
        <p>{{ cinema.distrito }}</p>
        <p>Distancia: {{ route.distance.text }}, Duración: {{ route.duration.text }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      preferences: {
        nombre: '',
        distrito: ''
      },
      dni: '',
      userLocation: '',
      cinema: null,
      route: {}
    };
  },
  methods: {
    fetchPreferences() {
      if (this.dni.length === 8) {  // Asumiendo que el DNI tiene 8 dígitos
        axios.post('http://127.0.0.1:5000/preferences/get_preferences_by_dni', { dni: this.dni })
            .then(response => {
              this.preferences = response.data;
              this.findPreferredCinema();  // Automáticamente busca el cine preferido
            })
            .catch(error => {
              console.error('Error fetching preferences:', error);
              alert('No se pudieron cargar las preferencias para el DNI proporcionado.');
            });
      }
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
              this.userLocation = `${position.coords.latitude},${position.coords.longitude}`;
              console.log("Ubicación obtenida: ", this.userLocation);
            },
            error => {
              console.error("Error obteniendo la ubicación", error);
              alert("Error al obtener la ubicación.");
            }
        );
      } else {
        alert("Geolocalización no soportada por este navegador.");
      }
    },
    findPreferredCinema() {
      if (!this.userLocation) {
        alert("Primero obtén tu ubicación.");
        return;
      }
      axios.post('http://127.0.0.1:5000/preferences/find_preferred_cinema', {
        dni: this.dni,
        user_location: this.userLocation,
        preferences: this.preferences
      }).then(response => {
        this.cinema = response.data.cinema;
        this.route = response.data.route;
      }).catch(error => {
        console.error('Error buscando el cine preferido:', error.response.data);
        alert('No se pudo encontrar un cine que coincida con las preferencias.');
      });
    }
  }
}
</script>

<style scoped>
.cineplanet-page {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #042c60;
  height: 150vh;
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

.cinema-container {
  margin-top: 20px;
  padding: 10px;
  color: white;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #FF6347;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #FF4500;
}
</style>

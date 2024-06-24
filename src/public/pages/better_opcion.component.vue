<template>
  <div class="cineplanet-page">
    <header>
      <h1>Cineplanet</h1>
      <p>Bienvenido a la reserva rápida de película</p>
      <button type="button" @click="navigateToLogin" style="color:white">Salir</button>
    </header>

    <div v-for="(cinema, index) in cinemas" :key="index" class="cinema-container">
      <h3>{{ cinema.cinema }}</h3>
      <div :id="'map' + index" style="width: 100%; height: 200px;"></div>
      <p>{{ cinema.nombre }}</p>
      <p style="color: white;">Distancia: {{ cinema.distance }}, Duración: {{ cinema.duration }}</p>
      <button @click="selectCinema(cinema)">Seleccionar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BetterOption',
  data() {
    return {
      userLocation: null,
      cinemas: [],
      selectedCinema: null
    };
  },
  methods: {
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
              this.userLocation = `${position.coords.latitude},${position.coords.longitude}`;
              this.fetchNearestCinemas();
            },
            error => {
              console.error("Error obtaining location", error);
              alert("Error al obtener la ubicación.");
            }
        );
      } else {
        alert("Geolocalización no soportada por este navegador.");
      }
    },
    fetchNearestCinemas() {
      axios.post('http://127.0.0.1:5000/routes/find_nearest_cinemas', {
        user_location: this.userLocation
      })
          .then(response => {
            this.cinemas = response.data;
            this.loadGoogleMapsScript(); // Modificado para cargar script aquí
          })
          .catch(error => {
            console.error("Failed to fetch cinemas", error);
          });
    },
    loadGoogleMapsScript() {
      if (typeof google === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCrtuZ3UjtvoissX-nqT9DIZRSrc6FvlE4'; // Asegúrate de usar tu clave real aquí
        document.head.appendChild(script);
        script.onload = () => {
          this.initMap();
        };
      } else {
        this.initMap();
      }
    },
    initMap() {
      this.cinemas.forEach((cinema, index) => {
        const mapElementId = 'map-' + index;
        const mapElement = document.getElementById(mapElementId);
        if (cinema.location && mapElement) {
          const [lat, lng] = cinema.location.split(',').map(Number);
          const map = new google.maps.Map(mapElement, {
            zoom: 13,
            center: { lat, lng }
          });

          new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: cinema.cinema
          });
        }
      });
    },
    selectCinema(cinema) {
      this.selectedCinema = cinema;
      localStorage.setItem('selectedCinema', JSON.stringify(cinema));
      alert(`Cine seleccionado: ${cinema.name}`);
    }
  },
  mounted() {
    this.getUserLocation();
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

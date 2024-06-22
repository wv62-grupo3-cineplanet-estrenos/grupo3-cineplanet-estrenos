
<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success', // Can be 'success', 'error', etc.
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    closeNotification() {
      this.visible = false;
    },
  },
};
</script>
<template>
  <div v-if="visible" class="notification" :class="type">
    <p>{{ message }}</p>
    <button @click="closeNotification">X</button>
  </div>
</template>


<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
}
.notification.success {
  background-color: #28a745;
}
.notification.error {
  background-color: #dc3545;
}
.notification p {
  margin: 0;
}
.notification button {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
}
</style>
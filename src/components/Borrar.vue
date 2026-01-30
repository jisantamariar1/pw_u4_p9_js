<template>
  <div>
    <h2>Borrar usuario</h2>

    <form @submit.prevent="borrar">
      <div class="campo">
        <label>ID</label>
        <input type="number" v-model.number="id" required>
      </div>

      <button type="submit">Borrar</button>
    </form>
  </div>
</template>

<script>
import { borrarFachada } from '@/clients/MatriculaClient';

export default {
  data() {
    return {
      id: null
    }
  },
  methods: {
    async borrar() {
      const confirmar = confirm(
        `¿Seguro que deseas borrar el registro con ID ${this.id}?`
      );

      if (!confirmar) return;

      try {
        await borrarFachada(this.id);
        alert('Registro borrado correctamente');
        this.id = null;
      } catch (error) {
        console.error(error);
        alert('Error al borrar');
      }
    }
  }
}
</script>

<style>
form {
  max-width: 300px;
  margin: auto;
  text-align: left;
}

.campo {
  margin-bottom: 12px;
}

.campo label {
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
}

.campo input {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}

button {
  padding: 8px 12px;
}
</style>

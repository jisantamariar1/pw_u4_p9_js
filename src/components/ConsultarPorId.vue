<template>
  <div>
    <h2>Consultar usuario por ID</h2>

    <form @submit.prevent="consultarPorId">
      <div class="campo">
        <label>ID</label>
        <input type="number" v-model.number="id" required>
      </div>

      <button type="submit">Consultar</button>
    </form>

    <!-- Resultado -->
    <div v-if="usuario" class="resultado">
      <h3>Resultado</h3>
      <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
      <p><strong>Apellido:</strong> {{ usuario.apellido }}</p>
      <p><strong>Fecha Nac.:</strong> {{ usuario.fechaNacimiento }}</p>
      <p><strong>Provincia:</strong> {{ usuario.provincia }}</p>
      <p><strong>Género:</strong> {{ usuario.genero }}</p>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFachada } from '@/clients/MatriculaClient';

export default {
  data() {
    return {
      id: null,
      usuario: null
    }
  },
  methods: {
    async consultarPorId() {
      try {
        this.usuario = await consultarPorIdFachada(this.id);
      } catch (error) {
        console.error(error);
        alert('No se encontró el registro');
        this.usuario = null;
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

.resultado {
  margin-top: 20px;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
</style>

<template>
  <div>
    <h2>Guardar usuario</h2>

    <form @submit.prevent="guardar">
      <div class="campo">
        <label>Nombre</label>
        <input type="text" v-model="usuario.nombre" required>
      </div>

      <div class="campo">
        <label>Apellido</label>
        <input type="text" v-model="usuario.apellido" required>
      </div>

      <div class="campo">
        <label>Fecha de nacimiento</label>
        <input
          type="datetime-local"
          v-model="usuario.fechaNacimiento"
          required
        >
      </div>

      <div class="campo">
        <label>Provincia</label>
        <input type="text" v-model="usuario.provincia" required>
      </div>

      <div class="campo">
        <label>Género</label>
        <select v-model="usuario.genero" required>
          <option disabled value="">Seleccione</option>
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Otro</option>
        </select>
      </div>

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { guardarFachada } from '@/clients/MatriculaClient';

export default {
  data() {
    return {
      usuario: {
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        provincia: '',
        genero: ''
      }
    }
  },
  methods: {
    async guardar() {
      try {
        const resp = await guardarFachada(this.usuario);
        console.log(resp);

        alert('Registro guardado correctamente');

        //  limpiar formulario
        this.usuario = {
          nombre: '',
          apellido: '',
          fechaNacimiento: '',
          provincia: '',
          genero: ''
        }
      } catch (error) {
        console.error(error);
        alert('Error al guardar');
      }
    }
  }
}
</script>

<style>
form {
  max-width: 400px;
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

.campo input,
.campo select {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
}
</style>

<template>
  <div>
    <h2>Actualizar usuario (Parcial)</h2>

    <form @submit.prevent="actualizarParcial">
      <div class="campo">
        <label>ID</label>
        <input type="number" v-model.number="usuario.id" required>
      </div>

      <div class="campo">
        <label>Nombre</label>
        <input type="text" v-model="usuario.nombre">
      </div>

      <div class="campo">
        <label>Apellido</label>
        <input type="text" v-model="usuario.apellido">
      </div>

      <div class="campo">
        <label>Fecha de nacimiento</label>
        <input type="datetime-local" v-model="usuario.fechaNacimiento">
      </div>

      <div class="campo">
        <label>Provincia</label>
        <input type="text" v-model="usuario.provincia">
      </div>

      <div class="campo">
        <label>Género</label>
        <select v-model="usuario.genero">
          <option value="">-- Sin cambiar --</option>
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Otro</option>
        </select>
      </div>

      <button type="submit">Actualizar parcialmente</button>
    </form>
  </div>
</template>

<script>
import { actualizarParcialFachada } from '@/clients/MatriculaClient';

export default {
  data() {
    return {
      usuario: {
        id: null,
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        provincia: '',
        genero: ''
      }
    }
  },
  methods: {
    async actualizarParcial() {
      try {
        const { id, ...body } = this.usuario;

        //  quitar campos vacíos (PATCH real)
        const bodyParcial = Object.fromEntries(
          Object.entries(body).filter(
            ([_, value]) => value !== '' && value !== null
          )
        );

        if (Object.keys(bodyParcial).length === 0) {
          alert('Debe ingresar al menos un campo para actualizar');
          return;
        }

        const resp = await actualizarParcialFachada(id, bodyParcial);
        console.log(resp);

        alert('Actualización parcial exitosa');
      } catch (error) {
        console.error(error);
        alert('Error al actualizar parcialmente');
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

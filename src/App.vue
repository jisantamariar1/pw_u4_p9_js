<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/consultar">Consultar Todos</router-link>|
    <router-link to="/consultarId">Consultar ID</router-link>|
    <router-link to="/guardar">Guardar</router-link>|
    <router-link to="/borrar">Borrar</router-link>|
    <router-link to="/actualizar">Actualizar</router-link>|
    <router-link to="/actualizarParcial">Actualizar Parcial</router-link>|
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>
<script>

import { ObtenerTokenFachada } from './clients/AutorizacionClient.js'

export default {
  async mounted() {
    const tokenData = await ObtenerTokenFachada()
    localStorage.setItem('token', tokenData.accessToken)  
    console.log('Token guardado para la sesión:', tokenData.accessToken)
    localStorage.clear();

  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

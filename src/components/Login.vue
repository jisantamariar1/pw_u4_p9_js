<template>
    <div class="login">
        <h2>Login</h2>
        <input v-model="usuario" type="text" placeholder="Usuario">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button v-on:click="login()">Entrar</button>

    </div>
</template>
<script>
import { ObtenerTokenFachada } from '../clients/AutorizacionClient.js'
export default {
    data() {
        return {
            usuario: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const tokenData = await ObtenerTokenFachada(this.usuario, this.password);

                if (tokenData !== null) {
                    localStorage.setItem('token', tokenData.accessToken);
                    localStorage.setItem('estaAutenticado', true);

                    console.log('Login exitoso su token es:');
                    console.log(localStorage.getItem('token'))
                    // aquí se podria redirigir
                    // Redirigir a Home
                    localStorage.setItem('user',this.usuario)
                    this.$router.push({ name: 'home' });
                } else {
                    console.log('Credenciales inválidas');
                }

            } catch (error) {
                console.error('Error de autenticación', error);
            }
        }

    }






};
</script>

<style>
.login {
    width: 300px;
    margin: 100px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
}

input {
    width: 90%;
    margin-bottom: 10px;
    padding: 8px;
}

button {
    width: 100%;
    padding: 8px;
    cursor: pointer;
}
</style>
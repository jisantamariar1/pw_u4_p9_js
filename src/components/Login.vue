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
        login() {
            //lógica de login aquí
            //mandar a obtener el token
            // const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6IkNhbWlsYSIsImdyb3VwcyI6WyJhZG1pbiJdLCJpYXQiOjE3NzAzMzY1MzAsImV4cCI6MTc3MDM0MDEzMCwianRpIjoiZWQ3YTM5M2YtNTU5ZS00ZmQzLWE4ZDUtNTY5MjA1ZmNmNGY0In0.Qg-qSWiO0VvY4cXRl8UQ4z1NmX4OWKWyWvgNECfnH46PuDi5vkhabZ9cco_UbxcN3AsQY4uu8BjRyNJnUOcj35aXd75iyX7znGpRsoDYy8RFCCtvzqsNBqW01Tx7vjwkAtU2-duj5Gr01U8xWjrO1RWwJwy2OMlum4fBEmTjYyrIsMfJGus8t5Qm6V1TV2r4FCI0vPFGLE0yYQOPcUeloeoLaM_QmG2fnxVcoymDK35xphl1vttJVq372P82xo8RacH5dFmD8gYY2BcHOnqFEWbzX6cgqiRFEr4GFbtf17SBekEhnQaQ-1bJ4t39-XrcYq0tOxBk0gicyajDKMWZOw";
            const TOKEN = ObtenerTokenFachada()
            if (TOKEN !== null) {
                localStorage.setItem("token", TOKEN);
                localStorage.setItem("estaAutenticado", true);

            } else {
                console.log("Error de autenticacion");

            }
        },
        async obtenerToken() {
            const tokenData = await ObtenerTokenFachada()
            localStorage.setItem('token', tokenData.accessToken)
            console.log('Token guardado para la sesión:', tokenData.accessToken)
           

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
<template>
    <div class="contenedor">
        <button v-on:click="guardar">Guardar</button>
        <button v-on:click="actualizar">Actualizar</button>
        <button v-on:click="actualizarParcial">Actualizar Parcial</button>
        <button v-on:click="borrar">Borrar</button>
        <button v-on:click="consultarTodos">Consultar todos</button>
        <button v-on:click="consultarPorId">Consultar por id</button>
    </div>
</template>

<script>
import { guardarFachada, actualizarFachada, actualizarParcialFachada, borrarFachada, consultarTodosFachada, consultarPorIdFachada } from '../clients/MatriculaClient.js';
export default {
    methods: {
        async guardar() {
            const resp = await guardarFachada();
            console.log(resp);
        },
        async actualizar() {
            const resp = await actualizarFachada();
            console.log(resp);
        },
        async actualizarParcial() {
            const resp = await actualizarParcialFachada();
            console.log(resp);
        },
        async borrar(id) {
            const resp = await borrarFachada(1);
            console.log(resp);
        },
        async consultarTodos() {
            const resp = await consultarTodosFachada();
            console.log(resp);
        },
        async consultarPorId() {
            const resp = await consultarPorIdFachada();
            console.log(resp);
        }
    }
}
</script>

<style>

</style>
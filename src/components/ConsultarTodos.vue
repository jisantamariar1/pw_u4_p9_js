<template>
    <h1>Consultar Todos</h1>
    <button v-on:click="consultarTodos">Consultar Todos</button>
    <table class="tabla">
        <thead>
            <tr>

                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de Nacimiento</th>
                <th>Genero</th>
                <th>Links</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in json" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{ item.fechaNacimiento }}</td>
                <td>{{ item.genero }}</td>
                <td>
                    <ul>
                        <li v-for="(link, linkIndex) in item.links" :key="linkIndex">
                            <a :href="link.href">{{ link.rel }}</a>
                        </li>
                    </ul>
                </td>

            </tr>
        </tbody>
    </table>

</template>

<script>
import { consultarTodosFacade } from '@/clients/MatriculaClient';
export default {
    methods: {
        async consultarTodos() {
            const resp = await consultarTodosFacade();
            console.log(resp);
            this.json = resp;
        }
    },
    data() {
        return {
            json: null
        };
    }

}
</script>

<style>
.tabla {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
}

.tabla th,
.tabla td {
    border: 1px solid #ddd;
    padding: 8px;
}

.tabla tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
<template>
    <div class="container-view">
        <ConsultarTodos />
    </div>
</template>

<script>
import ConsultarTodos from '../components/ConsultarTodos.vue';
export default {
    components: {
        ConsultarTodos
    }
}
</script>

<style>
.container-view {
    margin-left: 50px;
    margin-right: 50px;
}
</style>
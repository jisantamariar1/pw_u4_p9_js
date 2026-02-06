<template>
    <div>
        <h1>Bienvenido</h1>
        <div v-if="usuario" class="usuario">
            <h2>{{usuario}}</h2>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            usuario:null,
        }
    },
    mounted(){
        this.usuario=localStorage.getItem('user');
    }

}
</script>
<style scoped> 
</style>
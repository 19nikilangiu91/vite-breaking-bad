<script>

// Importiamo lo "store"
import { store } from '../store.js';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <!-- Creo il template del "select" -->
    <select class="form-select" v-model="store.searchStatus" @click.prevent="$emit('search')"
        aria-label="Default select example">
        <option selected value="">Select Category</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
    </select>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

.form-select {
    width: 15%;
    margin: 0 0 50px 150px;
    background-color: white;
    padding: 5px;
}
</style>
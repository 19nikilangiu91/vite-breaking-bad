<script>
// Importo il componente "SingleCharacter"
import SingleCharacter from './SingleCharacter.vue'

// Importiamo lo "store"
import { store } from '../store.js';

export default {
    name: "CharacterList",
    components: {
        SingleCharacter,
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <div class="found">
        <h2>Found {{ store.characterList.length }} characters</h2>
    </div>
    <section class="container">
        <!-- Creo un  v-for per stampare le altre "cards" dinamicamente-->
        <div v-for="character in store.characterList" :key="character.id">
            <SingleCharacter :info="character" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;


.found {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 50px;
    padding-left: 20px;
    margin: 20px auto;
    color: white;
    background-color: black;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
}
</style>
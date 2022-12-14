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
    <div class="found"></div>
    <section class="container">
        <SingleCharacter />
    </section>
</template>

<style lang="scss" scoped>
.found {
    width: 90%;
    height: 20px;
    margin: 0 auto;
    background-color: black;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    height: 500px;
    margin: 0px auto;
}
</style>
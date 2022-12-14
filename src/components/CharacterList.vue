<script>
// Importiamo lo "store"
import { store } from '../store.js';

export default {
    name: "CharacterList",
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
        <!-- Template di card singola -->
        <div class="character">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="image">
            <h4 class="name">nome</h4>
            <div class="status">stato</div>
            <div class="species">specie</div>
        </div>
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

    .character {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 120px;
        height: 200px;
        margin: 5px;
        background-color: red;

        img {
            width: 100px;
            height: 100px;
            align-self: center;
        }

        .name,
        .status,
        .species {
            margin-top: 5px;
            align-self: center;
        }
    }
}
</style>
<script>
// Importo Axios
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharacterList.vue';
// Importo lo "store" da store.js
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharacterList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.characterList = res.data.results;
        })
        .catch(err => {
          console.log("Errors", err);
        })
    }
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<template>

  <body>
    <!-- Vado a prendere da "store" il "titolo" -->
    <AppHeader :msg="store.titolo" />
    <main>
      <CharacterList />
    </main>
  </body>
</template>

<style lang="scss" >
@use './style/general.scss' as*;
@use './style/partials/variables' as*;

h1 {
  color: $primary;
}
</style>

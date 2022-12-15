<script>
// Importo Axios
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import CharacterList from './components/CharacterList.vue';
// Importo lo "store" da store.js
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppSelect,
    CharacterList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {

      // Dichiaro la variabile "myUrl"
      let myUrl = store.apiURL;

      // Creo la condizione per lo "store.searchStatus" dove se non è "" gli inserisco i parametri che mi servono.
      if (store.searchStatus !== "") {
        myUrl += `?${store.apiParameter}=${store.searchStatus}`;
      }

      axios
        .get(myUrl)
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
    <!-- Vado a prendere da "@search" gli "Status" che mi servono. -->
    <AppSelect @search="getCharacters" />
    <main>
      <CharacterList />
    </main>
  </body>
</template>

<style lang="scss" >
@use './style/general.scss' as*;
@use './style/partials/variables' as*;

.name,
h1 {
  color: $primary;
}

.status,
.species {
  color: $secondary;
}
</style>

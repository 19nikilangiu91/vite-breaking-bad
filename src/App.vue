<script>
import AppHeader from './components/AppHeader.vue'
// Importo lo "store" da store.js
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>

  <body>
    <!-- Vado a prendere da "store" il "titolo" -->
    <AppHeader :msg="store.titolo" />
    <main>

    </main>
  </body>
</template>

<style lang="scss" >
@use './style/general.scss' as*;
@use './style/partials/variables' as*;

body {
  width: 100%;
  height: 100vh;
  background-color: #2e3a46;
}

h1 {
  color: $primary;
}
</style>

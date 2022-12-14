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
    <AppHeader />
  </body>
</template>

<style lang="scss" >
body {
  width: 100%;
  height: 100vh;
  background-color: #2e3a46;

}
</style>

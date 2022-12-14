<script>
export default {
    name: "AppHeader",
    // Creo la props per inviare il "msg" da "App.vue" e vado a stamparlo nell' "h1".
    props: ["msg"]
}

</script>

<template>
    <header>
        <h1>{{ msg }}</h1>
    </header>
</template>

<style lang="scss" scoped>
h1 {
    margin: 20px 0 0 20px;
}
</style>
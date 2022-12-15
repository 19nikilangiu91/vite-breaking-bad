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
        <!-- <div class="button">Select Category
            <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div> -->
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;

h1 {
    margin: 20px 0 50px 20px;
}

// .button {
//     width: 10%;
//     margin-left: 150px;
//     background-color: white;
//     padding: 10px;
// }
</style>
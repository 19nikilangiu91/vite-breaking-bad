<script>

export default {
    name: "SingleCharacter",
    props: ["info"],
}

</script>

<template>
    <!-- Template di card singola -->
    <div class="character">
        <img :src="info.image" alt="image">
        <h4 class="name">{{ info.name }}</h4>
        <div class="status">{{ info.status }}</div>
        <div class="species">{{ info.species }}</div>
    </div>

</template>

<style lang="scss" scoped>
.character {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    margin: 5px;
    background-color: #2e3a46;

    img {
        width: 100%;
        height: 150px;
        align-self: center;
    }

    .name,
    .status,
    .species {
        margin-top: 5px;
        align-self: center;
        text-align: center;
    }
}
</style>
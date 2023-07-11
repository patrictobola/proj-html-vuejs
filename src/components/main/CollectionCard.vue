<script>
export default {
    methods: {
        getImagePath(image) {
            const url = new URL(`/src/assets/images/collections/${image}`, import.meta.url)
            return url.href
        }
    },
    props: {
        imagePath: String,
        text: String,
        description: String,
    },
}
</script>

<template>
    <div class="collection-card text-center">
        <img :src="getImagePath(imagePath)" :alt="text">
        <div class="text-wrapper">
            <h1>{{ text }}</h1>
            <p>{{ description }}</p>
            <a href="#">VIEW MORE</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.collection-card {
    height: calc(100vw / 3);
    width: calc(100vw / 3);
    position: relative;
}

img {
    width: 100%;
    object-fit: cover;
    height: 100%;
}

.text-wrapper {
    position: relative;
    bottom: 40%;
    color: $white;

}

p {
    letter-spacing: 0.375em;
    margin-bottom: 30px;
}

a {
    color: $white;
    border: 1px solid $white;
    border-radius: 30px;
    padding: 10px 20px;

}
</style>
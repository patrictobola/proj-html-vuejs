<script>
export default {
    props: {
        offerTitle: String,
        description: String,
        imagePath: String
    },
    methods: {
        getImagePath(image) {
            const url = new URL(`/src/assets/images/website_promos/${image}`, import.meta.url)
            return url.href
        }
    },
}

</script>
<template>
    <div class="offer-card px-3 h-75 ">
        <img :src="getImagePath(imagePath)" :alt="offerTitle">
        <div class="text-wrapper w-50">
            <h1>{{ offerTitle }}</h1>
            <p>{{ description }}</p>
            <a href="#">VIEW MORE</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../../scss/variables';

.offer-card {
    position: relative;
}

.text-wrapper {
    position: relative;
    left: 10%;
    bottom: 50%;
    transform: translate(0, -50%);
    color: white;
}

img {
    height: 100%;
}

a {
    color: $white;
    border: 1px solid $white;
    border-radius: 30px;
    padding: 10px 20px;
    display: inline-block;

    &:hover {
        background-color: rgba($color: pink, $alpha: .6)
    }
}
</style>
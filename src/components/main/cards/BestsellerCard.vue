<script>
export default {
    methods: {
        getImagePath(image) {
            const url = new URL(`/src/assets/images/card_models/${image}`, import.meta.url)
            return url.href
        },
    },
    props: {
        imagePath: String,
        finalPrice: Number,
        originalPrice: Number,
        tags: Array,
        name: String,

    },
}
</script>

<template>
    <div class="base-card">
        <img :src="getImagePath(imagePath)" alt="foto">
        <div class="overlay">
            <div class="w-100 h-100 d-flex justify-content-between  flex-column text-center pt-5">
                <div class="mt-5">
                    <h5>{{ name }}</h5>
                    <ul class="d-flex justify-content-center">
                        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
                    </ul>
                    <span class="d-flex justify-content-center">${{ finalPrice }}</span>
                </div>
                <div class="d-flex justify-content-between align-items-end mb-3 px-3">
                    <div><a href="#">Add to cart</a></div>
                    <div><a href="#">Details</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

.base-card {
    position: relative;
}

ul {
    height: 50px;
}

img {
    opacity: 1;
    object-fit: cover;
    width: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
}

.overlay {
    transition: .5s ease;
    opacity: 0;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0px;
    border-radius: 10px;
    background: rgb(255, 130, 221);
    background: linear-gradient(0deg, rgba(255, 130, 221, 1) 0%, rgba(0, 176, 255, 1) 100%);
}

.base-card:hover .overlay {
    opacity: 0.9;
}

a {
    color: white;
    font-size: 0.8rem;
}
</style>
<script>
import InfoCard from './InfoCard.vue'
export default {
    components: {
        InfoCard,
    },
    methods: {
        getImagePath(image) {
            const url = new URL(`/src/assets/images/card_models/${image}`, import.meta.url)
            return url.href
        }
    },
    props: {
        imagePath: String,
        finalPrice: Number,
        originalPrice: Number,
        tags: Array,
        name: String,

    }
}
</script>

<template>
    <div class="base-card">
        <img :src="getImagePath(imagePath)" alt="foto">
        <InfoCard v-if="name" :name="name" :tags="tags" :originalPrice="originalPrice" :finalPrice="finalPrice" />
    </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100px;
    border-radius: 10px;
    background: rgb(255, 130, 221);
    background: linear-gradient(0deg, rgba(255, 130, 221, 1) 0%, rgba(0, 176, 255, 1) 100%);
}

.base-card:hover .overlay {
    opacity: 0.9;
}
</style>
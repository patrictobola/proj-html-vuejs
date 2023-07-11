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
        <InfoCard :name="name" :tags="tags" :originalPrice="originalPrice" :finalPrice="finalPrice" />
    </div>
</template>

<style scoped>
.base-card {
    width: 231px;
}

img {
    object-fit: cover;
    width: 100%;

}
</style>
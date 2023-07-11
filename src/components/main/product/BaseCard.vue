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
    }
}
</script>

<template>
    <div class="base-card">
        <img :src="getImagePath('black_elegant_leather_jacket-231x300.jpg')" alt="foto">
        <InfoCard />
    </div>
</template>

<style scoped>
.base-card {
    width: 231px;
}

img {
    object-fit: cover;

}
</style>
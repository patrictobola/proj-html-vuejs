<script>
import InfoCard from './InfoCard.vue'
export default {
    components: {
        InfoCard,
    }
}
</script>

<template>
    <div class="base-card">
        <img src="../../../assets/images/card_models/black_elegant_leather_jacket-231x300.jpg" alt="">
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
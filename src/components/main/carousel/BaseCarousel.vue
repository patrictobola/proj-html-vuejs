<script>
import BaseCard from '../product/BaseCard.vue';
import { store } from '../../../data/store';
export default {
    components: {
        BaseCard
    },
    data() {
        return { store }
    },
}
</script>

<template>
    <div class="carousel d-flex">
        <BaseCard v-for="product in store.bestSellers" :imagePath="product.imagePath" />

    </div>
</template>

<style></style>
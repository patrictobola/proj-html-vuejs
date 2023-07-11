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
    <BaseCard v-for="product in store.bestSellers" :imagePath="product.imagePath" />
</template>

<style></style>
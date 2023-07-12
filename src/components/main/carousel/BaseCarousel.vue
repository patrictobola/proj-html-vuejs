<script>
import BestsellerCard from '../cards/BestsellerCard.vue';
import { store } from '../../../data/store';
export default {
    components: {
        BestsellerCard
    },
    data() {
        return { store }
    },
}
</script>

<template>
    <div class="carousel d-flex justify-content-center mb-5">
        <BestsellerCard v-for="product in store.bestSellers" :imagePath="product.imagePath" :finalPrice="product.finalPrice"
            :name="product.name" :tags="product.tags" />

    </div>
</template>

<style></style>
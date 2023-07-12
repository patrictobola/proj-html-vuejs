<script>
import ProductCard from '../cards/ProductCard.vue'
import { store } from '../../../data/store';
export default {
    data() {
        return store
    },
    components: {
        ProductCard
    }
}
</script>

<template>
    <section>
        <div class="button-container text-center">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Accessories</a>
        </div>
        <div class="card-container d-flex justify-content-center">
            <ProductCard v-for="product in products.men" :key="product.name" :imagePath="product.imagePath"
                :finalPrice="product.finalPrice" :originalPrice="product.originalPrice" :tags="product.tags"
                :name="product.name" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

a {
    font-weight: bold;
    padding: 10px 30px;
    background: transparent;
    border: 1px solid $light-gray;

    &:hover {
        background-color: $light-gray;
    }
}

.button-container {
    /* border-radius: 3px; */
    margin-bottom: 50px;
}

section {
    margin-bottom: 100px;
}
</style>
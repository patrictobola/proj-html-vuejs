<script>
import BaseCard from './product/BaseCard.vue'
import { store } from '../../data/store';
export default {
    data() {
        return store
    },
    components: {
        BaseCard
    }
}
</script>

<template>
    <div class="button-container text-center">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Accessories</a>
    </div>
    <div class="card-container d-flex justify-content-center">
        <BaseCard v-for="product in products.men" :imagePath="product.imagePath" :finalPrice="product.finalPrice"
            :originalPrice="product.originalPrice" :tags="product.tags" :name="product.name" />
    </div>
</template>

<style scoped>
a {
    font-weight: bold;
    padding: 10px 30px;
    background: gainsboro;
    border: 1px solid gray;
}

.button-container {
    /* border-radius: 3px; */
    margin-bottom: 50px;
}

/* .card-container {} */
</style>
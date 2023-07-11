<script>
import BaseCard from './product/BaseCard.vue'
export default {
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
        <BaseCard />
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
    border-radius: 3px;
    margin-bottom: 50px;
}

/* .card-container {} */
</style>
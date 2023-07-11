<script>
import OffersCard from '../offers/OffersCard.vue';
export default {
    components: {
        OffersCard,
    }
}
</script>

<template>
    <section>
        <div class="container h-100 d-flex justify-content-center align-items-center">
            <OffersCard />
            <OffersCard />

        </div>
    </section>
</template>

<style scoped>
section {
    height: 500px;
    background-color: lightblue;
}
</style>
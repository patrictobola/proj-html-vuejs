<script>
import { store } from '../../../data/store';
import OffersCard from '../offers/OffersCard.vue';
export default {
    components: {
        OffersCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section>
        <div class="container h-100 d-flex justify-content-center align-items-center">
            <OffersCard v-for="offer in store.websiteOffers" :offerTitle="offer.offerTitle"
                :description="offer.description" />


        </div>
    </section>
</template>

<style scoped>
section {
    height: 500px;
    background-color: lightblue;
}
</style>
<script>
import { store } from '../../../data/store';
import OffersCard from '../cards/OffersCard.vue';
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
            <OffersCard v-for="offer in store.websiteOffers" :offerTitle="offer.offerTitle" :description="offer.description"
                :imagePath="offer.imagePath" />


        </div>
    </section>
</template>

<style scoped>
section {
    height: 500px;
    background: no-repeat center/100% url(../../../assets/images/bkgd_confetti-compressor.jpg);
}
</style>
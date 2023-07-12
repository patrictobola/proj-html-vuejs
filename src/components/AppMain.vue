<script>
import JumbotronPage from './main/JumbotronPage.vue'
import BaseTitle from './main/BaseTitle.vue'
import SectionContainer from './main/sections/SectionContainer.vue';
import SectionCollection from './main/sections/SectionCollection.vue';
import SectionBestseller from './main/sections/SectionBestseller.vue';
import SectionOffers from './main/sections/SectionOffers.vue';
import SectionArrivals from './main/sections/SectionArrivals.vue';
import SectionTestimonial from './main/sections/SectionTestimonial.vue';
import SectionBlog from './main/sections/SectionBlog.vue'
export default {
    components: {
        JumbotronPage,
        BaseTitle,
        SectionContainer,
        SectionCollection,
        SectionBestseller,
        SectionOffers,
        SectionArrivals,
        SectionTestimonial,
        SectionBlog,
    }
}
</script>

<template>
    <JumbotronPage />
    <BaseTitle :title="`Featured Products`" :description="`Must have products from our top sellers`" />
    <SectionContainer />
    <SectionCollection />

    <BaseTitle :title="`Best Seller`" :description="`Must have products from our top sellers`" />
    <SectionBestseller />
    <SectionOffers />

    <BaseTitle :title="`New Arrivals`" :description="`Brand new products from top designers`" />
    <SectionArrivals />
    <SectionTestimonial />

    <BaseTitle :title="`From Our Blog`" :description="`The latest Classic Shop news`" />
    <SectionBlog />
</template>

<style></style>
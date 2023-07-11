<script>
import JumbotronPage from './main/JumbotronPage.vue'
import SectionTitle from './main/sections/SectionTitle.vue'
import SectionContainer from './main/sections/SectionContainer.vue';
import SectionCollection from './main/sections/SectionCollection.vue';
import SectionBestseller from './main/sections/SectionBestseller.vue';
import SectionOffers from './main/sections/SectionOffers.vue'
export default {
    components: {
        JumbotronPage,
        SectionTitle,
        SectionContainer,
        SectionCollection,
        SectionBestseller,
        SectionOffers,
    }
}
</script>

<template>
    <JumbotronPage />
    <SectionTitle :title="`Featured Products`" :description="`Must have products from our top sellers`" />
    <SectionContainer />
    <SectionCollection />
    <SectionTitle :title="`Best Seller`" :description="`Must have products from our top sellers`" />
    <SectionBestseller />
    <SectionOffers />
</template>

<style></style>
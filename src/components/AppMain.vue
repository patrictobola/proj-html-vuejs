<script>
import JumbotronPage from './main/JumbotronPage.vue'
import SectionTitle from './main/SectionTitle.vue'
import SectionContainer from './main/SectionContainer.vue';
import SectionCollection from './main/SectionCollection.vue';
export default {
    components: {
        JumbotronPage,
        SectionTitle,
        SectionContainer,
        SectionCollection,
    }
}
</script>

<template>
    <JumbotronPage />
    <SectionTitle :title="`Featured Products`" :description="`Must have products from our top sellers`" />
    <SectionContainer />
    <SectionCollection />
</template>

<style></style>
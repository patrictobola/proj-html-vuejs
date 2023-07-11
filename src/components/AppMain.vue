<script>
import JumbotronPage from './main/JumbotronPage.vue'
import SectionTitle from './main/SectionTitle.vue'
import SectionContainer from './main/SectionContainer.vue';
export default {
    components: {
        JumbotronPage,
        SectionTitle,
        SectionContainer,
    }
}
</script>

<template>
    <JumbotronPage />
    <SectionTitle :title="`Featured Products`" :description="`Must have products from our top sellers`" />
    <SectionContainer />
</template>

<style></style>
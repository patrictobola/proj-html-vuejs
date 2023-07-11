<script>
import JumbotronPage from './main/JumbotronPage.vue'
import SectionTitle from './main/SectionTitle.vue'
export default {
    components: {
        JumbotronPage,
        SectionTitle,
    }
}
</script>

<template>
    <JumbotronPage />
    <SectionTitle :title="`Featured Products`" :description="`Must have products from our top sellers`" />
</template>

<style></style>
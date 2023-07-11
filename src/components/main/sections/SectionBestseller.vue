<script>
import BaseCarousel from '../carousel/BaseCarousel.vue'
export default {
    components: {
        BaseCarousel,
    },

}
</script>

<template>
    <section class="d-flex justify-content-center">
        <div class="container">
            <BaseCarousel />
        </div>
    </section>
</template>

<style scoped>
section {
    margin-bottom: 100px;
}
</style>
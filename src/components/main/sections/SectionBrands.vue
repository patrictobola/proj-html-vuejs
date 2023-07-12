<script>
import BaseBrand from '../BaseBrand.vue'
import { store } from '../../../data/store';
export default {
    components: {
        BaseBrand,
    },
    data() {
        return {
            brand: store.logos
        }
    }
}
</script>


<template>
    <section>
        <div class="container d-flex flex-column justify-content-center align-center text-center py-5">
            <div>
                <h3>BRAND LOGOS</h3>
            </div>
            <div class="d-flex justify-content-evenly">
                <BaseBrand v-for="logo in brand" :name="logo.name" :image="logo.path" />
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '../../../scss/variables';

section {
    height: 250px;
    background-color: $light-gray;
}

h3 {
    color: $gray;
}
</style>
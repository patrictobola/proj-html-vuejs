<script>
import { store } from '../../../data/store';
import ListStore from '../ListStore.vue';
export default {
    components: {
        ListStore,
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <section class="container">
        <div class="row my-5">
            <ListStore v-for="section in store.webStore" :webStore="section" />

        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '../../../scss/variables';

section {
    border-top: 1px solid $gray;
}
</style>
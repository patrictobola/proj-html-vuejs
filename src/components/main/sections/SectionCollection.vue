<script>
import { store } from '../../../data/store'
import CollectionCard from '../cards/CollectionCard.vue';
export default {
    components: {
        CollectionCard
    },
    data() {
        return {
            store
        }
    },


}
</script>

<template>
    <div class="collection-container d-flex">
        <CollectionCard v-for="collection in store.collection" :key="collection.text" :imagePath="collection.imagePath"
            :text="collection.text" :description="collection.text" />
    </div>
</template>

<style scoped></style>
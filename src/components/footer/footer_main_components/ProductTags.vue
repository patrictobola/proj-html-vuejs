<script>
import BaseTag from './BaseTag.vue';
import { store } from '../../../data/store';
export default {
    components: {
        BaseTag,
    },
    data() {
        return {
            tags: store.tags
        }
    }
}
</script>

<template>
    <div class="col-3 text-white h-75">
        <h5>TAGS</h5>
        <div class="d-flex flex-wrap">
            <BaseTag v-for="tag in tags" :name="tag.name" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
h5 {
    font-weight: 300;
}
</style>
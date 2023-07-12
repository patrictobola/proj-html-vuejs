<script>
export default {
    props: {
        webStore: Object
    },
    methods: {
        getImagePath(image) {
            const url = new URL(`/src/assets/images/${image}`, import.meta.url)
            return url.href
        }
    },
}
</script>

<template>
    <div class="col-3">
        <ul>
            <li class="title">
                <h5>{{ webStore.name }}</h5>
            </li>
            <li v-for="item in webStore.items" class="item py-2">
                <div class="d-flex justify-content-between h-100">
                    <div>
                        <ul>
                            <li>{{ item.itemName }}</li>
                            <li class="vote" v-if="item.vote">stars stars stars</li>
                            <li class="price">
                                <del v-if="item.originalPrice">${{ item.originalPrice }}</del>
                                <b> ${{ item.finalPrice }}</b>
                            </li>
                        </ul>
                    </div>
                    <div class="h-100">

                        <img class="h-100" :src="getImagePath(item.imagePath)" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

h5 {
    font-weight: 300;
}

ul {
    padding: 0;
    font-size: 0.9rem;
}

li {
    margin: 0;
    color: $white;
}

.vote {
    color: $blue;
}

.price {
    text-decoration: underline;
}

.item {
    height: 80px;
    border-bottom: 1px solid $dark-gray;
}
</style>
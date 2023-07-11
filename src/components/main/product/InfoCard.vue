<script>
export default {
    props: {
        finalPrice: Number,
        originalPrice: Number,
        tags: Array,
        name: String,
    }
}
</script>

<template>
    <div class="text-container">
        <h6>{{ name }}</h6>
        <p>{{ tags }}</p>
        <span>
            <del v-if="originalPrice">${{ originalPrice }}</del>
            ${{ finalPrice }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

.text-container {
    margin-top: 20px;
}

h6 {
    font-weight: 600;

}

p {
    font-weight: 300;
    font-size: 0.8rem;
    color: $dark-gray;
    margin-bottom: 10px;
}

span {
    color: $blue;
    font-weight: 600;
}

del {
    font-size: 0.8rem;
    font-weight: normal;
}
</style>
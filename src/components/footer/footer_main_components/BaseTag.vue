<script>
export default {
    props: {
        name: String
    }
}
</script>


<template>
    <a href="#">{{ name }}</a>
</template>


<style lang="scss" scoped>
@import '../../../scss/variables';

a {
    margin: 2px;
    color: white;
    padding: 6px 10px;
    border: 1px solid $dark-gray;

    &:hover {
        background-color: $blue;
    }
}
</style>
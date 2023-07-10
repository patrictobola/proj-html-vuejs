<script>

export default {
    props: {
        placeholder: String
    }
}
</script>

<template>
    <li><a href="#">{{ placeholder }}</a></li>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

a {
    padding: 30px 0;
    margin: 0 30px;
    line-height: 80px;
    color: $gray;

    &:hover {
        color: $blue;
        border-top: 2px solid $blue;
    }
}

li {
    height: 100%;
}
</style>
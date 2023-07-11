<script>
export default {
    props: {
        title: String,
        description: String,
    }
}
</script>

<template>
    <section class="container">
        <div class="title-container d-flex">
            <div class="linebreak"></div>
            <div class="title align-self-center text-center">
                <h2>{{ title }}</h2>
                <span>{{ description }}</span>
            </div>
            <div class="linebreak"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

.title-container {
    height: 200px;
}

.linebreak {
    height: 50%;
    border-bottom: 1px solid $gray;
    flex-grow: 1;
}

.title {
    margin: 0 40px;
    padding-top: 20px;

    h2 {
        font-weight: bold;
        font-size: 2.5rem;
    }

    span {
        color: $gray;
    }
}
</style>
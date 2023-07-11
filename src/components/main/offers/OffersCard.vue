<script>
export default {
    props: {
        offerTitle: String,
        description: String,
    }
}

</script>
<template>
    <div class="offer-card px-3 h-75 ">
        <img src="../../../assets/images/website_promos/promo_box_1_bg.jpg" alt="">
        <div class="text-wrapper w-50">
            <h1>{{ offerTitle }}</h1>
            <p>{{ description }}</p>
            <a href="#">VIEW MORE</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../../scss/variables';

.offer-card {
    position: relative;
}

.text-wrapper {
    position: relative;
    left: 10%;
    bottom: 50%;
    transform: translate(0, -50%);
    color: white;
}

img {
    height: 100%;
}

a {
    color: $white;
    border: 1px solid $white;
    border-radius: 30px;
    padding: 10px 20px;
    display: inline-block;
}
</style>
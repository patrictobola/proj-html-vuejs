<script>
import ProductTags from './footer_main_components/ProductTags.vue';
import RecentPosts from './footer_main_components/RecentPosts.vue';
import TopProducts from './footer_main_components/TopProducts.vue';
import WebshopInfo from './footer_main_components/WebshopInfo.vue';
export default {
    components: {
        ProductTags,
        RecentPosts,
        TopProducts,
        WebshopInfo,
    }
}
</script>
<template>
    <section>
        <div class="container h-100">
            <div class="row">
                <WebshopInfo />
                <TopProducts />
                <RecentPosts />
                <ProductTags />
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped >
section {
    height: 400px;
    background-color: #2b2e32;
}
</style>
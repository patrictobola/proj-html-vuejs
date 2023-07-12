<script>
import BlogCard from '../cards/BlogCard.vue';
import { store } from '../../../data/store'
export default {
    components: {
        BlogCard,
    },
    data() {
        return {
            blog: store.blog
        }
    },

}
</script>

<template>
    <section class="container ">
        <div class="row gx-5 mb-5">
            <BlogCard v-for="article in blog.articles" :comment="article.comments" :date="article.date"
                :imagePath="article.imagePath" :post="article.post" :titleText="article.titleText" />
        </div>
    </section>
</template>

<style></style>
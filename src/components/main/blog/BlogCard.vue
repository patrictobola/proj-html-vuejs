<script>
export default {
    props: {
        comment: String,
        date: String,
        imagePath: String,
        post: String,
        titleText: String,
    },
    methods: {
        getImagePath(image) {
            const url = new URL(`/src/assets/images/blog_images/${image}`, import.meta.url)
            return url.href
        }
    },
}
</script>
<template>
    <div class="blog-card  col-4">
        <figure><img :src="getImagePath(imagePath)" alt="Tizia"></figure>
        <h6 class="m-0">{{ titleText }}</h6>
        <span class="date">{{ date }}</span><span> | </span><span class="comments">{{ comment }}</span>
        <p>{{ post }}</p>
    </div>
</template>
<style lang="scss" scoped>
@import '../../../scss/variables';

img {
    width: 100%;
}

span {
    font-size: 0.8rem;
}

span,
p {
    color: $gray;
}

p {
    margin-top: 20px;
}
</style>
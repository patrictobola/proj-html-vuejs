<script>
export default {
    props: {
        name: String,
        image: String,
    },
    methods: {
        getImagePath(image) {
            const url = new URL(`/src/assets/images/brand_logos/${image}`, import.meta.url)
            return url.href
        }
    },
}
</script>
<template>
    <figure>
        <img :src="getImagePath(image)" :alt="name">
    </figure>
</template>
<style></style>
<script>
export default {

}
</script>

<template>
    <div class="collection-container d-flex">
        <div class="collection-card text-center">
            <div class="text-wrapper">
                <h1>Winter Collection</h1>
                <p>STYLISH AND WARM</p>
                <a href="#">VIEW MORE</a>
            </div>
        </div>
        <div class="collection-card"></div>
        <div class="collection-card"></div>

    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.collection-container {
    height: 500px;
}

.collection-card {
    height: calc(100vw / 3);
    width: calc(100vw / 3);
    background: no-repeat top/100% url(../../assets/images/collections/winter_collection_bg.jpg);
    border: 1px solid black;
    position: relative;
}

.text-wrapper {
    position: relative;
    top: 65%;
    color: $white;

}

p {
    letter-spacing: 0.375em;
    margin-bottom: 30px;
}

a {
    color: $white;
    border: 1px solid $white;
    border-radius: 30px;
    padding: 10px 20px;

}
</style>
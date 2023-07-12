<script>
export default {

}
</script>

<template>
    <div class="col-3 text-white h-75">
        <h5>RECENT POSTS</h5>
        <ul>
            <li>> <a href="#">Lorem ipsum, dolor sit amet</a></li>
            <li>> <a href="#">Consectetur adipisicing elit.</a></li>
            <li>> <a href="#">Molestiae officiis eligendi laborum!</a></li>
            <li>> <a href="#">Amet consectetur adipisicing elit.</a></li>
            <li>> <a href="#">Mollitia voluptate vitae vero</a></li>
            <li>> <a href="#">Quaerat soluta fugit nostrum aperiam?</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

h5 {
    font-weight: 300;
}

li {
    margin: 20px 0;
}

a {
    color: $white;

    &:hover {
        color: $blue;
    }
}
</style>
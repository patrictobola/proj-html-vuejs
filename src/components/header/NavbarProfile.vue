<script>

</script>

<template>
    <nav class="container profile">
        <div class=" d-flex justify-content-between align-items-center">
            <div class="icons d-flex">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </div>
            <div><span>Sponsors</span></div>
            <div><span>IMenu</span></div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";

.profile>div {
    height: 40px;
}

.profile {
    border-bottom: 1px solid $light-gray;
}
</style>
<script>

</script>

<template>
    <div class="jumbotron text-center">
        <div class="jumbo-container d-flex flex-column justify-content-center">

            <h1>Brand New Arrivals</h1>
            <h3>NEW COLLECTION FROM NEW YORK</h3>
            <div class="d-flex w-100 justify-content-center">
                <a href="#">VIEW ALL</a>
                <a href="#">LOOKBOOK</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.jumbotron {
    height: 650px;
    background: no-repeat center/100% url('../../assets/images/home1_slide_three_bg_2.jpg');
    color: $white;
}

.jumbo-container {
    height: 100%;
}


h1 {
    font-size: 6rem;
    font-weight: bold;
    margin: 0;
}

h3 {
    font-size: 2rem;
    margin: 20px 0 40px 0;
}

a {
    color: $white;
    border: 2px solid $white;
    border-radius: 25px;
    margin: 0 20px;
    padding: 15px 50px;
    font-weight: bold;
    background-color: rgba($color: #fff, $alpha: 0.2);

    &:hover {
        background-color: rgba($color: pink, $alpha: .8)
    }
}
</style>
<script>

</script>

<template>
    <div class="text-container">
        <h6>Black Leather Jacket</h6>
        <p>Men, Jackets, Jeans</p>
        <span>
            <del>235€</del>
            €200
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

.text-container {
    margin-top: 20px;
}

h6 {
    font-weight: 600;

}

p {
    font-weight: 300;
    font-size: 0.8rem;
    color: $dark-gray;
    margin-bottom: 10px;
}

span {
    color: $blue;
    font-weight: 600;
}

del {
    font-size: 0.8rem;
    font-weight: normal;
}
</style>
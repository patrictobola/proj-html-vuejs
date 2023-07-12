<script>

</script>

<template>
    <nav>
        <div class="container profile d-flex justify-content-between align-items-center">
            <!-- Social side  -->
            <div class="icons d-flex">
                <a href="#">
                    <FontAwesomeIcon class="icons" icon="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                    <FontAwesomeIcon class="icons" icon="fa-brands fa-twitter" />
                </a>
                <a href="#">
                    <FontAwesomeIcon class="icons" icon="fa-brands fa-instagram" />
                </a>
                <a href="#">
                    <FontAwesomeIcon class="icons" icon="fa-brands fa-youtube" />
                </a>
            </div>
            <!-- Actually empty TODO control  -->
            <div><span>Sponsors</span></div>
            <!-- UserMenù side  -->
            <div class="user-menu d-flex">
                <ul class="list-unstyled d-flex">
                    <li><a href="#">Shopping Cart</a></li>
                    <li class="account"><a href="#">My Account</a></li>
                    <li class="cart"><a href="#">
                            <FontAwesomeIcon class="icons" icon="fa-solid fa-cart-shopping" />CART
                        </a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";

.account {
    border: 1px solid $light-gray;
}

.icons {
    color: black;

    &:hover {
        color: $blue
    }
}

.profile {
    height: 40px;
}

a {
    color: $gray;
    padding: 0 10px;
    line-height: 40px;
    display: block;

    &:hover {
        color: $blue;
    }
}


li {
    height: 100%;
}

.cart {
    height: 100%;
    background-color: $light-gray;
    padding: 0 50px;

    >a {
        color: black;

        &:hover {
            color: $blue;
        }
    }
}
</style>
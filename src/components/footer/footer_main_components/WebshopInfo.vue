<script>
export default {

}
</script>

<template>
    <div class="col-3 h-75">
        <a href="#" alt:="Logo"><img src="../../../assets/images/shop_logo/classic_shop_logo_footer.png" alt=""></a>
        <!-- Address  -->
        <div>
            <ul>
                <li>
                    <address>12345 North Main Street</address>
                </li>
                <li>
                    <address>New York, NY 555555</address>
                </li>
                <li>Phone: <a href="tel:+18005556789">1.800.555.6789</a></li>
                <li>Email: <a href="mailto:info@company.com">info@company.com</a></li>
                <li>Web: <a href="#">Theme-fusion.com</a></li>
            </ul>
        </div>
        <!-- Socials  -->
        <div class="d-flex">
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
    </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

img {
    width: 60%;
    margin-bottom: 30px;
}

ul {
    padding: 0;
}

a {
    color: $white;

    &:hover {
        color: $blue;
    }
}

li {
    color: $white;
    margin: 5px 0;
}

address {
    margin: 0;
}

.icons {
    margin: 40px 5px;
}
</style>
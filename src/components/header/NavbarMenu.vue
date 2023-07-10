<script>
import BaseSelection from './BaseSelection.vue'

export default {
    components: {
        BaseSelection
    },
    props: {
        headerOptions: Object
    }
}
</script>

<template>
    <nav>
        <div class="menu container d-flex align-items-center justify-content-between">
            <div class="logo"><img src="../../assets/images/shop_logo/classic_shop_logo1x.png" alt="Website Logo"></div>
            <div class="menu-list d-flex align-items-center">
                <ul class="menu-options d-flex ">
                    <BaseSelection v-for="option in headerOptions.menuItems" :placeholder="option" />
                </ul>
                <button>SHOP NOW!</button>
                <a href="#" alt="Search Icon">
                    <FontAwesomeIcon icon="fas fa-magnifying-glass" />
                </a>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../../scss/variables";

.menu {
    height: 80px
}

.menu-list {
    height: 100%;
}

ul {
    height: 100%;
}

button {
    padding: 10px 25px;
    background-color: $blue;
    border: 0;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    margin-right: 40px;
}
</style>
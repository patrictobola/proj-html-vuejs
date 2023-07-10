<script>
import NavbarMenu from './header/NavbarMenu.vue'
import NavbarProfile from './header/NavbarProfile.vue'

export default {
    components: {
        NavbarMenu,
        NavbarProfile
    },
    data() {
        return {
            headerOptions: {
                menuItems: ["Home", "Shop", "Products", "Categories", "News", "Elements"],
                home: [],
                shop: [],
                products: [],
                categories: [],
                elements: [],
            }
        }
    }
}
</script>

<template>
    <NavbarProfile />
    <NavbarMenu :headerOptions="headerOptions" />
</template>

<style></style>
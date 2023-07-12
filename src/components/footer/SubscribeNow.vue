<script></script>
<template>
    <section>
        <div class="h-100 container d-flex justify-content-evenly align-items-center">
            <div>
                <h1>Subscribe now and get special offers</h1>
            </div>
            <div>
                <form action="submit">
                    <input type="email" placeholder="Insert your email">
                    <button>SEND</button>
                </form>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '../../scss/variables';

section {
    background-color: $dark-gray;
    height: 250px;
}

h1 {
    color: $white;
    margin: 0;
}

input {
    border-radius: 20px;
    border: 0;
    padding: 8px 10px;
    width: 300px;
    margin-left: 80px;
}

button {
    border-radius: 20px;
    margin-left: 20px;
    color: $white;
    background-color: $blue;
    border: 0;
    padding: 8px 30px;
}
</style>
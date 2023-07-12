<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <section class="d-flex justify-content-center align-items-center">
        <div class="testimonial-container text-center">
            <figure><img src="../../../assets/images/testimonials/man_testimonial.png" alt=""></figure>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad deserunt itaque, magnam porro nobis
                tempora delectus vero nesciunt. Temporibus iusto repellendus quo voluptatum deserunt minus exercitationem
                veniam, beatae quia.</p>
            <span><b>Dario pineda</b>, Theme Fusion</span>
            <div class="mt-5">

                <FontAwesomeIcon icon="fas fa-circle" class="me-2" />
                <FontAwesomeIcon icon="far fa-circle" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../../scss/variables';

section {
    height: 500px;
    background: url('../../../assets/images/testimonials/testimonials_home_1_bg.jpg');
}

.testimonial-container {
    height: 100%;
    width: 50%;
    padding: 100px 0;
    color: $white;
}

p {
    letter-spacing: 0.150rem;
}
</style>
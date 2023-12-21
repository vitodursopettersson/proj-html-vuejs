<script>
import AppButton from './common/AppButton.vue';
export default {
    name: 'AppMainSectionAbove',
    components: {
        AppButton,
    }
}

</script>

<template>
    <section>
        <div class="container">
            <div class="column-50 text-container">
                <h1>Complete Your Dreams in JavaS Programming</h1>
                <h5>Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've
                    got our assistance and help.</h5>
                <AppButton>
                    <template v-slot:icon>
                        <font-awesome-icon icon="fa-solid fa-download" />
                    </template>
                    <template v-slot:text>
                        <span>Download free E-book</span>
                    </template>
                </AppButton>
            </div>
            <div class="column-50 img-container">
                <img src="../assets/img/home-hero.png" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #E9E6E3;
    height: 80vh;

    .container {
        display: flex;
    }

    .text-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 14%;

        h1 {
            margin-bottom: 40px;
        }

        h5 {
            margin-bottom: 35px;
        }
    }

    .img-container {

        display: flex;

        img {
            object-fit: contain;
            width: 100%;

        }
    }
}
</style>
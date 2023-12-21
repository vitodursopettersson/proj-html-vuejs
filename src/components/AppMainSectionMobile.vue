<script>
import AppCustomHeading from './common/AppCustomHeading.vue';
import AppButton from './common/AppButton.vue';
export default {
    components: {
        AppCustomHeading,
        AppButton,
    },
}

</script>

<template>
    <section>
        <div class="container">

            <div class="column-50 img-container">
                <img src="../assets/img/yourmobile.png" alt="">
            </div>
            <div class="column-50">
                <AppCustomHeading :smallHeading="'What are you looking for?'" :beforeText="'Learn on your'"
                    :customText="'mobile'" :nextText="'anytime!'" />
                <p>Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never
                    interfere with activities of enjoyment or other precious moments.</p>
                <AppButton>
                    <template v-slot:text>
                        <span>Download Our App</span>
                    </template>
                </AppButton>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
}

section {
    padding: 65px 0;
}

p {
    margin-bottom: 40px;
}
</style>
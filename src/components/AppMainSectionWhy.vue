<script>
import AppCustomHeading from './common/AppCustomHeading.vue';
import AppCheck from './common/AppCheck.vue';
import AppButton from './common/AppButton.vue';
export default {
    components: {
        AppCustomHeading,
        AppCheck,
        AppButton,
    },
    data() {
        return {
            checkList: [
                {
                    text: 'Select & customize courses to your preferences'
                },
                {
                    text: 'Change the tutor and make arrangements'
                },
                {
                    text: 'Participate in events to join others'
                },
                {
                    text: 'Get the desired certificate delivered at house'
                },
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="container">

            <div class="column-50">
                <AppCustomHeading :smallHeading="'Why hesitate to register?'" :beforeText="'Learn At Your Own'"
                    :customText="'Pace'" />
                <ul>
                    <AppCheck v-for="check in this.checkList" :text="check.text" />
                </ul>
                <AppButton>
                    <template v-slot:text>
                        <span>Get started for free</span>
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
.container {
    display: flex;
    align-items: center;
}

section {
    padding: 65px 0;
}

ul {
    margin-bottom: 50px;
}
</style>
<script>
import AppMainSectionAbove from './AppMainSectionAbove.vue';
import AppMainSectionBuild from './AppMainSectionBuild.vue';
import AppMainSectionDream from './AppMainSectionDream.vue';
import AppMainSectionCounter from './AppMainSectionCounter.vue';
export default {
    name: 'AppMain',
    components: {
        AppMainSectionAbove,
        AppMainSectionBuild,
        AppMainSectionDream,
        AppMainSectionCounter,
    },
}

</script>

<template>
    <main>
        <AppMainSectionAbove />
        <AppMainSectionBuild />
        <AppMainSectionDream />
        <AppMainSectionCounter />
    </main>
</template>

<style scoped></style>
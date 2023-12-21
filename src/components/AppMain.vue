<script>
import AppMainSectionAbove from './AppMainSectionAbove.vue';
import AppMainSectionBuild from './AppMainSectionBuild.vue';
import AppMainSectionDream from './AppMainSectionDream.vue';
export default {
    name: 'AppMain',
    components: {
        AppMainSectionAbove,
        AppMainSectionBuild,
        AppMainSectionDream,
    },
}

</script>

<template>
    <main>
        <AppMainSectionAbove />
        <AppMainSectionBuild />
        <AppMainSectionDream />
    </main>
</template>

<style scoped></style>
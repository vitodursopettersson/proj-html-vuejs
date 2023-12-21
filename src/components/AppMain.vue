<script>
import AppMainSectionAbove from './AppMainSectionAbove.vue';
import AppMainSectionBuild from './AppMainSectionBuild.vue';
import AppMainSectionDream from './AppMainSectionDream.vue';
import AppMainSectionCounter from './AppMainSectionCounter.vue';
import AppMainSectionCourses from './AppMainSectionCourses.vue';
export default {
    name: 'AppMain',
    components: {
        AppMainSectionAbove,
        AppMainSectionBuild,
        AppMainSectionDream,
        AppMainSectionCounter,
        AppMainSectionCourses,
    },
}

</script>

<template>
    <main>
        <AppMainSectionAbove />
        <AppMainSectionBuild />
        <AppMainSectionDream />
        <AppMainSectionCounter />
        <AppMainSectionCourses />
    </main>
</template>

<style scoped></style>
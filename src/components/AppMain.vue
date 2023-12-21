<script>
import AppMainSectionAbove from './AppMainSectionAbove.vue';
import AppMainSectionBuild from './AppMainSectionBuild.vue';
import AppMainSectionDream from './AppMainSectionDream.vue';
import AppMainSectionCounter from './AppMainSectionCounter.vue';
import AppMainSectionCourses from './AppMainSectionCourses.vue';
import AppMainSectionWhy from './AppMainSectionWhy.vue';
import AppMainSectionMobile from './AppMainSectionMobile.vue';
import AppMainSectionEventVue from './AppMainSectionEvent.vue';
export default {
    name: 'AppMain',
    components: {
        AppMainSectionAbove,
        AppMainSectionBuild,
        AppMainSectionDream,
        AppMainSectionCounter,
        AppMainSectionCourses,
        AppMainSectionWhy,
        AppMainSectionMobile,
        AppMainSectionEventVue,
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
        <AppMainSectionWhy />
        <AppMainSectionMobile />
        <AppMainSectionEventVue />
    </main>
</template>

<style scoped></style>
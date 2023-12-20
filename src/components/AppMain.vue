<script>
import AppMainSectionAbove from './AppMainSectionAbove.vue';
import AppMainSectionBuild from './AppMainSectionBuild.vue';
export default {
    name: 'AppMain',
    components: {
        AppMainSectionAbove,
        AppMainSectionBuild,
    },
}

</script>

<template>
    <main>
        <AppMainSectionAbove />
        <AppMainSectionBuild />
    </main>
</template>

<style scoped></style>
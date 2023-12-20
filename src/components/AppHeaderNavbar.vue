<script>
import AppHeaderNavbarMenu from './AppHeaderNavbarMenu.vue';
import AppHeaderNavbarIcon from './AppHeaderNavbarIcon.vue';
import AppHeaderNavbarSearch from './AppHeaderNavbarSearch.vue';
export default {
    name: 'AppHeaderNavbar',
    components: {
        AppHeaderNavbarMenu,
        AppHeaderNavbarIcon,
        AppHeaderNavbarSearch,
    },
}

</script>

<template>
    <div class="navbar">
        <AppHeaderNavbarMenu />
        <AppHeaderNavbarIcon />
        <AppHeaderNavbarSearch />
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
}
</style>
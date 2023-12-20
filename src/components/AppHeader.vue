<script>
import AppHeaderLogo from './AppHeaderLogo.vue';
import AppHeaderNavbar from './AppHeaderNavbar.vue';
export default {
    name: 'AppHeader',
    components: {
        AppHeaderLogo,
        AppHeaderNavbar,
    },
}

</script>

<template>
    <header>
        <div class="container">
            <AppHeaderLogo />
            <AppHeaderNavbar />
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: #E9E6E3;
    padding: 16px 0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
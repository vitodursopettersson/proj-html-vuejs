<script>
import AppHeaderNavbarIconCart from './AppHeaderNavbarIconCart.vue';
import AppHeaderNavbarIconAccount from './AppHeaderNavbarIconAccount.vue';
export default {
    components: {
        AppHeaderNavbarIconCart,
        AppHeaderNavbarIconAccount,
    },
}

</script>

<template>
    <div class="navbar__icon">
        <AppHeaderNavbarIconCart />
        <AppHeaderNavbarIconAccount />
    </div>
</template>

<style scoped>
.navbar__icon {
    margin: 0 20px;
    display: flex;
    gap: 20px;
}
</style>
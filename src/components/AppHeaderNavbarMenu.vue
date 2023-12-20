<script>
import AppHeaderNavbarMenuDropdown from './AppHeaderNavbarMenuDropdown.vue';
export default {
    components: {
        AppHeaderNavbarMenuDropdown,
    },
    data() {
        return {
            menu: [
                {
                    title: 'Home',
                },
                {
                    title: 'Pages',
                },
                {
                    title: 'Courses',
                },
                {
                    title: 'Features',
                },
                {
                    title: 'Blog',
                },
                {
                    title: 'Shop',
                }
            ]
        }
    }
}

</script>

<template>
    <ul>
        <AppHeaderNavbarMenuDropdown v-for="item in menu" :title="item.title" />
    </ul>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
    display: flex;
    gap: 36px;
}
</style>
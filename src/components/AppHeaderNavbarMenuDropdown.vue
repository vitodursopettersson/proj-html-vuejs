<script>

export default {
    name: 'AppHeaderNavbarMenuDropdown',
    components: {

    },
    props: ['title']
}

</script>

<template>
    <li>
        <a>{{ title }}</a>
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
    </li>
</template>

<style lang="scss" scoped>
li {
    color: #3F3A64;
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
        font-size: 14px;
        font-weight: 500;
        margin-right: 6px;
    }

    .icon {
        font-size: 10px;
    }
}
</style>
<script>

export default {
    name: 'AppHeaderNavbarSearch',
    components: {

    },
}

</script>

<template>
    <div class="search">
        <input type="text" placeholder="Search...">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
    </div>
</template>

<style lang="scss" scoped>
.search {

    background-color: #fff;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-radius: 6px;


    input {
        border: none;

        &:focus {
            outline: none;
        }
    }

    .icon {
        font-size: 18px;
        color: #4BAF97;
        cursor: pointer;
    }
}
</style>
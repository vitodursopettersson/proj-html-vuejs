<script>

export default {
    name: 'AppHeaderNavbarIconCart'
}

</script>

<template>
    <div class="icon__container">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon" />
        <div class="icon__bubble">
            <p>0</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icon__container {
    width: 26px;
    height: 26px;
    position: relative;
    cursor: pointer;

    .icon {
        width: 100%;
        color: #333333;
    }

    .icon__bubble {
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        right: -6px;
        top: -6px;
        background-color: #4BAF97;
        color: #fff;
        font-size: 10px;
        font-weight: 500;
    }
}
</style>
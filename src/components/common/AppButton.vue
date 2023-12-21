<script>

export default {
    name: 'AppButton'
}

</script>

<template>
    <button>
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="text">
            <slot name="text"></slot>
        </div>
    </button>
</template>

<style lang="scss" scoped>
button {
    background-color: #4BAF97;
    width: fit-content;
    padding: 14px 32px;
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: none;
    border-radius: 4px;

    &:hover {
        background-color: #469f8a;
        transition: background-color 0.1s ease-in-out;
    }

    .icon {
        font-size: 18px;
    }

    .text {
        font-size: 12px;
        font-weight: 500;
    }

}
</style>
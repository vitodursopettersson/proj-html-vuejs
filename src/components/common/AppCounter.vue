<script>

export default {
    name: 'AppCounter',
    props: ['num', 'text']
}

</script>

<template>
    <div class="counter">
        <h5>{{ num }}</h5>
        <h6>{{ text }}</h6>
    </div>
</template>

<style lang="scss" scoped>
.counter {
    text-align: center;

    h5 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 16px;
        color: #21AD96;
    }

    h6 {
        font-size: 15px;
        text-transform: uppercase;
        color: #3F3A64;
        letter-spacing: 2px;

    }
}
</style>
<script>

export default {
    name: 'AppCheck',
    props: ['text']
}

</script>

<template>
    <li>
        <img src="../../assets/img/checkbox.svg" alt="">
        <p>{{ text }}</p>
    </li>
</template>

<style lang="scss" scoped>
li {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 20px 0;

    img {
        width: 20px;
        margin-right: 20px;
    }
}
</style>
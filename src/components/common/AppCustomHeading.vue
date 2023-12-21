<script>

export default {
    name: 'AppCustomHeading',
    props: ['smallHeading', 'beforeText', 'customText', 'nextText']
}

</script>

<template>
    <div class="heading-container">
        <h4>{{ smallHeading }}</h4>
        <div class="custom-heading">
            <h2>{{ beforeText }}</h2>
            <h3>{{ customText }}</h3>
            <h2>{{ nextText }}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.heading-container {

    margin-bottom: 20px;

    h4 {
        text-transform: uppercase;
    }

    .custom-heading {

        * {
            display: inline-block;
        }

        h3 {
            margin: 0 10px;
        }
    }
}
</style>
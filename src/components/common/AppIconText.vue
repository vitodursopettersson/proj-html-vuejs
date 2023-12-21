<script>

export default {
    components: {

    },
    props: ['image', 'title', 'text', 'cta', 'ctaLink']
}

</script>

<template>
    <div class="card">
        <div class="card__image">
            <img :src="image" alt="">
        </div>
        <div class="card__info">
            <h6>{{ title }}</h6>
            <p>{{ text }}</p>
            <a :href="ctaLink">{{ cta }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 20px;

    .card__image {
        margin-bottom: 40px;
    }

    .card__info {

        h6 {
            font-size: 16px;
            font-weight: 600;
            color: #333333;
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 20px;
        }

        a {
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            color: #9793AA;
        }
    }
}
</style>
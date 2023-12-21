<script>

export default {
    name: 'AppTestimonialCard',
    props: ['photo', 'content', 'name', 'work']
}

</script>

<template>
    <div class="card">
        <div class="card__photo">
            <img :src="photo" alt="">
        </div>
        <div class="card__content">
            <p>{{ content }}</p>
            <h5>{{ name }}</h5>
            <span>/ {{ work }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    width: calc(100% / 3);
    margin: 20px;
    padding: 20px;
    text-align: center;

    .card__photo {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: -60px;
        margin-bottom: 20px;

        img {
            width: 100%;
            object-fit: contain;
        }
    }

    .card__content {

        padding-bottom: 20px;

        p {
            margin-bottom: 20px;
        }

        h5 {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 600;
            color: #333333;
            margin-bottom: 6px;
        }

        span {
            font-size: 12px;
            font-weight: 400;
            color: #9F9F9F;
        }
    }
}
</style>
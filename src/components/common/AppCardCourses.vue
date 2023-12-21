<script>

export default {
    name: 'AppCardCourses',
    props: ['coursesImg', 'priceBig', 'priceSmall', 'teacherPic', 'teachearName', 'coursesTitle', 'lessons', 'students'],
}

</script>

<template>
    <div class="card">

        <div class="card__image">

            <img :src="coursesImg" alt="">

            <div class="price">
                <p>{{ priceBig }}</p>
                <span>{{ priceSmall }}</span>
            </div>



        </div>

        <div class="card__info">
            <div class="teacher">
                <div class="teacher__pic">
                    <img :src="teacherPic" alt="">
                </div>
                <h6>{{ teachearName }}</h6>
            </div>
            <div class="courses-title">
                {{ coursesTitle }}
            </div>
            <div class="info">
                <div class="icon">
                    <font-awesome-icon icon="fa-regular fa-file-lines" />
                    <p> {{ lessons }} Lessons</p>
                </div>
                <div class="icon">
                    <font-awesome-icon icon="fa-regular fa-user" />
                    <p> {{ students }} Students</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {

    margin: 15px;
    border-radius: 4px;
    overflow: hidden;

    &:hover {
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.04)
    }

    .card__image {

        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .price {
            position: absolute;
            top: 0;
            right: 0;
            color: #fff;
            background-color: #21AD96;
            width: fit-content;
            padding: 6px 20px;
            border-radius: 0 4px 0 4px;
            display: flex;
            align-items: baseline;


            p {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 0px;
                color: #fff;

            }

            span {
                font-size: 12px;
            }
        }


    }

    .card__info {
        background-color: #fff;
        padding: 20px 20px 10px;

        .teacher {

            display: flex;
            align-items: center;

            img {
                width: 40px;
                border-radius: 50%;
                overflow: hidden;
            }

            h6 {
                margin-left: 12px;
                font-size: 12px;
                font-weight: 300;
                margin-bottom: 6px;
            }
        }

        .courses-title {
            font-size: 16px;
            font-weight: 500;
            margin: 10px 0 20px;
        }

        .info {
            display: flex;
            gap: 20px;

            .icon {

                display: flex;
                align-items: baseline;
                gap: 6px;

                p {
                    font-size: 12px;
                }
            }

        }
    }

}
</style>
<script>
import AppCustomHeading from './common/AppCustomHeading.vue';
import AppCardCourses from './common/AppCardCourses.vue';
import AppButton from './common/AppButton.vue';
export default {
    components: {
        AppCustomHeading,
        AppCardCourses,
        AppButton,
    },
    data() {
        return {
            courses: [
                {
                    coursesImg: 'src/assets/img/course-1.jpg',
                    priceBig: '$40.',
                    priceSmall: '00',
                    teacherPic: 'src/assets/img/pic-blanche.jpeg',
                    teachearName: 'Blanche Fields',
                    coursesTitle: 'Learning to Write as a Professional Author',
                    lessons: '20',
                    students: '50',
                },
                {
                    coursesImg: 'src/assets/img/course-2.jpg',
                    priceBig: 'Free',
                    teacherPic: 'src/assets/img/pic-maggie.jpeg',
                    teachearName: 'Maggie Strickland',
                    coursesTitle: 'Customer-centric Info-Tech Strategies',
                    lessons: '24',
                    students: '79',
                },
                {
                    coursesImg: 'src/assets/img/course-3.jpg',
                    priceBig: '$19.',
                    priceSmall: '00',
                    teacherPic: 'src/assets/img/pic-maggie.jpeg',
                    teachearName: 'Maggie Strickland',
                    coursesTitle: 'Open Programming Courses for Everyone: Python',
                    lessons: '17',
                    students: '62',
                },
                {
                    coursesImg: 'src/assets/img/course-4.jpg',
                    priceBig: '$26.',
                    priceSmall: '00',
                    teacherPic: 'src/assets/img/pic-blanche.jpeg',
                    teachearName: 'Blanche Fields',
                    coursesTitle: 'Academic Listening and Notetaking',
                    lessons: '14',
                    students: '67',
                },
                {
                    coursesImg: 'src/assets/img/course-5.jpg',
                    priceBig: '$39.',
                    priceSmall: '00',
                    teacherPic: 'src/assets/img/pic-blanche.jpeg',
                    teachearName: 'Blanche Fields',
                    coursesTitle: 'Master jQuery in a Short Period of Time',
                    lessons: '6',
                    students: '51',
                },
                {
                    coursesImg: 'src/assets/img/course-6.jpg',
                    priceBig: '$59.',
                    priceSmall: '00',
                    teacherPic: 'src/assets/img/pic-blanche.jpeg',
                    teachearName: 'Blanche Fields',
                    coursesTitle: 'Introduction to Javascript for Beginners',
                    lessons: '14',
                    students: '76',
                },

            ]
        }
    }
}

</script>
<template>
    <section>
        <div class="container">
            <AppCustomHeading :smallHeading="'Choose where youd like to begin'" :beforeText="'Latest Featured'"
                :customText="'Courses'" />
            <div class="column-container">
                <div class="column-3" v-for="course in courses">
                    <AppCardCourses :coursesImg="course.coursesImg" :priceBig="course.priceBig"
                        :priceSmall="course.priceSmall" :teacherPic="course.teacherPic" :teachearName="course.teachearName"
                        :coursesTitle="course.coursesTitle" :lessons="course.lessons" :students="course.students" />
                </div>
            </div>
            <AppButton class="button-container">
                <template v-slot:text>
                    <span>View all courses →</span>
                </template>
            </AppButton>
        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    .container {
        margin-top: 80px;
        margin-bottom: 50px;
        text-align: center;
        flex-wrap: wrap;

        .column-container {
            text-align: left;
            flex-wrap: wrap;
        }

        .button-container {
            margin: 20px auto;
        }
    }
}
</style>
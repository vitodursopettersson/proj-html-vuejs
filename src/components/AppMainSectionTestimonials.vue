<script>
import AppCustomHeading from './common/AppCustomHeading.vue';
import AppTestimonialCard from './common/AppTestimonialCard.vue';
export default {
    components: {
        AppCustomHeading,
        AppTestimonialCard,
    },
    data() {
        return {
            testionals: [
                {
                    photo: 'src/assets/img/testimonial-1.jpg',
                    content: 'I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.',
                    name: 'Mina Hollace',
                    work: 'Freelancer',
                },
                {
                    photo: 'src/assets/img/testimonial-2.jpg',
                    content: 'MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    name: 'Madley Pondor',
                    work: 'It Specialist',
                },
                {
                    photo: 'src/assets/img/testimonial-3.jpg',
                    content: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.',
                    name: 'Luvid Dubble',
                    work: 'Private Tutor',
                }
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <AppCustomHeading :smallHeading="'People are praising Maxcoach'" :beforeText="'What make they'"
                :customText="'love us?'" />
            <div class="testimonials-container">
                <AppTestimonialCard v-for="testimonial in this.testionals" :photo="testimonial.photo"
                    :content="testimonial.content" :name="testimonial.name" :work="testimonial.work" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #F8F8F8;
    padding-top: 10px;
}

.container {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;
}

.testimonials-container {
    margin-top: 60px;
    padding-bottom: 80px;
    display: flex;
}
</style>
<script>
import AppCustomHeading from './common/AppCustomHeading.vue';
import AppIconText from './common/AppIconText.vue';
export default {
    components: {
        AppCustomHeading,
        AppIconText,
    },
    data() {
        return {
            cards: [
                {
                    title: 'Idea Idea Discussion',
                    content: 'Get teamed up with the specialists who work and teach coding for years at famous universities.',
                    img: 'src/assets/img/idea-discussion.png',
                    cta: 'Start now →',
                    ctaLink: '#'
                },
                {
                    title: 'Web Development',
                    content: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.',
                    img: 'src/assets/img/web-development.png',
                    cta: 'Start now →',
                    ctaLink: '#'
                },
                {
                    title: 'System Administration',
                    content: 'Learners are encouraged to study the mechanism and structure of system administration.',
                    img: 'src/assets/img/system-administration.png',
                    cta: 'Start now →',
                    ctaLink: '#'
                },
                {
                    title: 'Graphic Design',
                    content: 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.',
                    img: 'src/assets/img/graphic-design.png',
                    cta: 'Start now →',
                    ctaLink: '#'
                },
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <AppCustomHeading :smallHeading="'Start learning coding languages'" :beforeText="'Build Your Dream'"
                :customText="'TODAY'" />
            <div class="column-container">
                <div class="column-4" v-for="card in this.cards">
                    <AppIconText :image="card.img" :title="card.title" :text="card.content" :cta="card.cta"
                        :ctaLink="'#'" />
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.container {
    margin-top: 80px;
    margin-bottom: 50px;
    text-align: center;
}
</style>
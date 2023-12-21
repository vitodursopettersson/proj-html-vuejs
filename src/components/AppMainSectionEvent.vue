<script>
import AppCustomHeading from './common/AppCustomHeading.vue';
import AppEventCard from './common/AppEventCard.vue';
export default {
    components: {
        AppCustomHeading,
        AppEventCard,
    },
    data() {
        return {
            events: [
                {
                    where: 'Texas, US',
                    name: 'Storytelling Workshop',
                    day: '22',
                    month: 'Nov',
                    ctaLink: '#',
                },
                {
                    where: 'New York, US',
                    name: 'Painting Art Contest 2020',
                    day: '10',
                    month: 'Oct',
                    ctaLink: '#',
                },
                {
                    where: 'Hamburg, Germany',
                    name: 'International Art Fair 2020',
                    day: '23',
                    month: 'Nov',
                    ctaLink: '#',
                },
                {
                    where: 'Illinois, US',
                    name: 'Street Performance: Call for Artist',
                    day: '15',
                    month: 'Dec',
                    ctaLink: '#',
                },
                {
                    where: 'Illinois, US',
                    name: 'Consumer Food Safety Education Conference',
                    day: '22',
                    month: 'Jul',
                    ctaLink: '#',
                },
                {
                    where: 'Dubai',
                    name: 'How meditation improve your mental health?',
                    day: '12',
                    month: 'Aug',
                    ctaLink: '#',
                },
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <AppCustomHeading :smallHeading="'Get in contact now'" :beforeText="'Upcomings'" :customText="'Event'" />
            <div class="card-container">
                <AppEventCard v-for="event in this.events" :where="event.where" :title="event.name" :day="event.day"
                    :month="event.month" />
            </div>
            <div class="cta-container">
                <p>Excited about our event?</p>
                <a href="#">View all events →</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
}

.cta-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    p {

        margin-right: 4px;
    }

    a {
        color: #21AD96;
        font-weight: 500;
    }
}
</style>
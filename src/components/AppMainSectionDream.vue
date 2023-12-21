<script>
import AppCustomHeading from './common/AppCustomHeading.vue';
import AppAccordion from './common/AppAccordion.vue';
export default {
    components: {
        AppCustomHeading,
        AppAccordion,
    },
    data() {
        return {
            accordions: [
                {
                    title: 'Multiple Platforms Supported for Teaching & Studying',
                    content: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device.",
                    isOpen: true,
                },
                {
                    title: 'Multiple Course Participation at the Same Time',
                    content: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device.",
                    isOpen: false,
                },
                {
                    title: 'Track Study Progress & Deliver Prompt Feedback',
                    content: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device.",
                    isOpen: false,
                },
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <div class="column-50 img-container">
                <img src="../assets/img/dreamwithus.png" alt="">
            </div>
            <div class="column-50">
                <AppCustomHeading :smallHeading="'Dream with MAXCOACH'" :beforeText="'Construct A'" :customText="'Stunning'"
                    :nextText="'Career Perspective'" />
                <AppAccordion v-for="accordion in this.accordions" :title="accordion.title" :content="accordion.content"
                    :class="{ active: accordion.isOpen }" />
            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    margin-top: 80px;
    margin-bottom: 80px;
}

.img-container {

    display: flex;

    img {
        object-fit: cover;


    }
}
</style>
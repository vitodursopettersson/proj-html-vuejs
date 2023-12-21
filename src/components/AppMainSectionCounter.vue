<script>
import AppCounter from './common/AppCounter.vue';
export default {
    components: {
        AppCounter,
    },
    data() {
        return {
            counter: [
                {
                    number: '1.926',
                    text: 'finished session',
                },
                {
                    number: '3.092+',
                    text: 'enrolled learners',
                },
                {
                    number: '200',
                    text: 'online instructors',
                },
                {
                    number: '100%',
                    text: 'satisfaction rate',
                }
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <div class="column-4" v-for="count in this.counter">
                <AppCounter :num="count.number" :text="count.text" />
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
section {

    background-color: #FAF8F6;
    padding: 65px 0;

    .container {
        display: flex;

    }
}
</style>
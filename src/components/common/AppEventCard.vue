<script>

export default {
    name: 'AppEventCard',
    props: ['where', 'title', 'day', 'month']
}

</script>

<template>
    <div class="card">
        <div class="card__info">
            <div class="card__info__where">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
                <span>{{ where }}</span>
            </div>
            <h6>{{ title }}</h6>
        </div>
        <div class="card__date">
            <h3>{{ day }}</h3>
            <h6>{{ month }}</h6>
            <button>Get ticket</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: #F8F8F8;
    display: flex;
    margin: 20px;
    width: calc((100% / 2) - 40px);
    padding: 20px;

    .card__info {
        flex-grow: 1;

        .card__info__where {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #7E7E7E;
            margin-top: 10px;
            margin-bottom: 10px;

            .icon {
                font-size: 14px;
            }

            span {
                font-size: 12px;
            }
        }

        h6 {
            text-align: left;
            font-size: 20px;
            font-weight: 500;

        }
    }

    .card__date {

        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            font-size: 40px;
            margin-bottom: -6px;
        }

        h6 {
            font-size: 12px;
            margin-bottom: 6px;
        }

        button {
            background-color: #21AD96;
            padding: 4px 20px;
            border-radius: 4px;
            border: none;
            color: #fff;
            cursor: pointer;

            &:hover {
                background-color: #1e9a85;
            }
        }
    }
}
</style>
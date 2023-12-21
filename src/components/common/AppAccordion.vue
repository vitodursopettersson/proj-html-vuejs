<script>

export default {
    props: ['title', 'content']
}

</script>

<template>
    <div class="accordion">
        <div class="title-container">
            <h6>{{ title }}</h6>
            <div class="icon">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                        <path d="M368.5,240H272v-96.5c0-8.8-7.2-16-16-16c-8.8,0-16,7.2-16,16V240h-96.5c-8.8,0-16,7.2-16,16c0,4.4,1.8,8.4,4.7,11.3
		c2.9,2.9,6.9,4.7,11.3,4.7H240v96.5c0,4.4,1.8,8.4,4.7,11.3c2.9,2.9,6.9,4.7,11.3,4.7c8.8,0,16-7.2,16-16V272h96.5
		c8.8,0,16-7.2,16-16C384.5,247.2,377.3,240,368.5,240z" fill="#fff" />
                    </g>
                </svg>

            </div>
        </div>
        <div class="content-container">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.accordion {
    margin: 28px 0;
    box-shadow: 0 0 80px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;

    .title-container {
        padding: 20px;
        background-color: #fff;
        color: #696969;
        display: flex;
        justify-content: space-between;

        h6 {
            font-size: 14px;
        }

        .icon {
            background-color: #696969;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            fill: #61C5B5;
        }

    }

    .content-container {
        display: none;
        padding: 30px;
    }

}

.active {
    .title-container {
        background-color: #61C5B5;
        color: #fff;
    }

    .content-container {
        display: block;
    }
}
</style>
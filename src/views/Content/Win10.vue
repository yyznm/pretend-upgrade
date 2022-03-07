<template>
    <div class="box" :style="{'background-color':color}">
        <div class="middle">
            <!-- 加载中 -->
            <div class="loading">
                <i>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </i>
            </div>
            <div class="con">
                <span>正在进行更新 {{count}}%</span>
                <span>请不要关闭电脑。完成此操作需要一定的时间</span>
            </div>
        </div>
        <div id="bottom">你的电脑会重启几次</div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { full } from '@/tool'
import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'
const message = useMessage()
const route = useRoute()

var count = ref(0)
var counter = setInterval(() => count.value++, 14830) //1000 will  run it every 1 second
onMounted(() => {
    if (route.params.q == 'true') {
        full()
    } else {
        if (route.name != 'Home') {
            message.success('点击F11即可全屏')
        }
    }
})
onUnmounted(() => {
    clearInterval(counter)
})
document.onkeydown = (e) => {
    //对整个页面监听
    var keyNum = window.event ? e.keyCode : e.which
    if (keyNum == 40) {
        count.value--
    } else if (keyNum == 38) {
        count.value++
    }
}
const props = defineProps<{
    bjColor?: String
}>()
const color = computed((): string => {
    if (typeof props.bjColor == 'string') {
        return props.bjColor
    } else if (typeof route.query.color == 'string') {
        return route.query.color
    } else {
        return '#0177d7'
    }
})
</script>

<style lang="scss" scoped>
.box {
    cursor: none;
    background-color: #0177d7;
    user-select: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Segoe UI Light, Segoe UI, Arial;
    font-size: 21px;
    color: #fff;
    user-select: none;
    font-weight: 200;
}

.con {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.loading {
    position: relative;
    width: 45px;
    height: 45px;
    margin: 0 auto;

    i {
        margin: auto;
        position: absolute;
        width: 40px;
        height: 40px;
        display: block;
    }

    span {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: rotate(0deg);
        animation: i 5.5s infinite;
    }

    span:after {
        content: '';
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 6px;
        height: 6px;
        background: #ffffff;
        border-radius: 3px;
    }

    span:nth-child(1) {
        animation-delay: 0.23s;
    }

    span:nth-child(2) {
        animation-delay: 0.46s;
    }

    span:nth-child(3) {
        animation-delay: 0.69s;
    }

    span:nth-child(4) {
        animation-delay: 0.92s;
    }

    span:nth-child(5) {
        animation-delay: 1.15s;
    }

    span:nth-child(6) {
        animation-delay: 1.08s;
    }

    @keyframes i {
        0% {
            transform: rotate(225deg);
            opacity: 0;
            animation-timing-function: ease-out;
        }
        1% {
            opacity: 1;
        }

        7% {
            transform: rotate(345deg);
            opacity: 1;
            animation-timing-function: linear;
        }

        30% {
            transform: rotate(455deg);
            opacity: 1;
            animation-timing-function: ease-in-out;
        }

        39% {
            transform: rotate(690deg);
            opacity: 1;
            animation-timing-function: linear;
        }

        70% {
            transform: rotate(815deg);
            opacity: 1;
            animation-timing-function: ease-out;
        }

        75% {
            transform: rotate(945deg);
            opacity: 0;
            animation-timing-function: ease-out;
        }

        76% {
            transform: rotate(945deg);
            opacity: 0;
        }

        100% {
            transform: rotate(945deg);
            opacity: 0;
        }
    }
}

#bottom {
    position: fixed;
    bottom: 10%;
    width: 100%;
    left: 0;
    text-align: center;
}
</style>
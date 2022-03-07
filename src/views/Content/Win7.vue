<template>
    <div class="box">
        <div class="con">
            <img src="@/assets/img/win7/win7_loading.gif">
            <span>正在配置 Windows 更新</span>
            <br>
            <span id="timer">{{count}}% 已完成</span>
            <br>
            <span>不要关闭计算机</span>
        </div>
        <div class="bottom">
            <img src="@/assets/img/win7/bottom.png">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { full } from '@/tool'
import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'
const message = useMessage()
const route = useRoute()
onMounted(() => {
    if (route.params.q == 'true') {
        full()
    }else{
        if(route.name != 'Home'){
            message.success('点击F11即可全屏')
        }
    }
})

var count = ref(0)
var counter = setInterval(() => count.value++, 14830) //1000 will  run it every 1 second
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
</script>

<style lang="scss" scoped>
.bottom {
    position: absolute;
    bottom: 17px;
    left: 50%;
    transform: translateX(-50%);
    img{
        width: 300px;
    }
}

.box {
    cursor: none;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Segoe UI, Arial;
    font-size: 22px;
    color: #fff;
    font-weight: 300;
    text-align: center;
    text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.8);
    user-select: none;
    background: url('@/assets/img/win7/background.jpg')
        #054696 no-repeat center center scroll;
    background-size: cover;
}
.box .con > img {
    padding-top: 35px;
    float: left;
}
</style>
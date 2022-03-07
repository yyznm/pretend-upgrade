<template>
    <div class="box">
        <div class="con">
            <div class="image">
                <img src="@/assets/img/xp/logo.jpg">
            </div>
            <div>
                <span>正在安装更新，第 {{count}} 个，共 121 个</span>
            </div>
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
const count = ref(0)
var counter = setInterval(() => count.value++, 14800) //1000 will  run it every 1 second
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
.box {
    cursor: none;
    height: 100%;
    width: 100%;
    background: url('@/assets/img/xp/bj.jpg')
        #5a7edc no-repeat center center scroll;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.con {
    width: 520px;
    text-align: right;

    font-family: Tahoma, Arial;
    font-size: 18px;
    color: #fff;
    font-weight: normal;
    text-align: right;
    user-select: none;
    text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
}

.con .image {
    margin-right: -20px;
}
</style>
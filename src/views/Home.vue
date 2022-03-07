<template>
    <div class="Home">

        <n-tabs type="line" :bar-width="28" v-model:value="activeKey" class="head">
            <n-tab name="Win10">
                Windons10
            </n-tab>
            <n-tab name="Mac">
                Mac
            </n-tab>
            <n-tab name="Win7">
                Windons7
            </n-tab>
            <n-tab name="Xp">
                Xp
            </n-tab>
        </n-tabs>

        <div class="con">
            <div class="left">
                <div class="contest">
                    <n-tooltip placement="top-start" trigger="hover" :duration="0" :delay="100">
                        <template #trigger>
                            <h1>鲁迅云：“上班太辛苦，不如来摸鱼”</h1>
                        </template>
                        <span> 鲁迅：我没说过，你别瞎说 </span>
                    </n-tooltip>
                    <br>
                    <p style="font-size: 15px;">当大家工作太辛苦（想偷懒）的时候😴,不妨点击右方‘全屏’按钮，让自己休息一下😉</p>
                    <br>
                    <p style="font-size: 14px;">按‘上下方向键’可让进度快速增长或减少的哦🚀，你甚至可以突破100%😏</p>
                    <br>
                    <p style="font-size: 14px;">假如您有多个屏幕，那您可以再开一个浏览器哦🎲</p>
                    <p style="font-size: 13px;opacity: 0.5;"> 温馨提示：真实的升级是不会两个显示器同时显示的哦🤡</p>
                </div>
            </div>
            <div class="right">
                <div class="comp" :style="{'height':height+'px'}">
                    <div @click="full_screen" class="mack"></div>
                    <component :is="comp" :bj-color="bjColor"></component>
                </div>
                <div class="btns">
                    <n-button @click="full_screen">全屏</n-button>
                    <n-button text style="margin-left: 15px;" disabled>按F11即可退出全屏</n-button>
                    <!-- 背景颜色 -->
                    <n-color-picker v-model:value="bjColor" v-if="activeKey == 'Win10'" size="small" style="width: 80px;margin-left: 15px;" :show-alpha="false" :modes="['hex']" :swatches="[
                    '#0177d7',
                    '#000000',
                    '#e81123',
                    '#a94dc1',
                    ]">
                        <template #label>
                            背景颜色
                        </template>
                    </n-color-picker>
                </div>
            </div>
        </div>
        <div class="bottom">
            <p>项目地址 gitee：<a target="_blank" href="https://gitee.com/yyznm/pretend-upgrade">@yyznm/pretend-upgrade</a></p>
            <p>项目地址 github：<a target="_blank" href="https://github.com/yyznm/pretend-upgrade">@yyznm/pretend-upgrade</a></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Win10 from './Content/Win10.vue'
import Win7 from './Content/Win7.vue'
import Mac from './Content/Mac.vue'
import Xp from './Content/Xp.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 当前组件
const activeKey = ref('Win10')
const comp = computed(() => {
    if (activeKey.value == 'Win10') {
        return Win10
    } else if (activeKey.value == 'Win7') {
        return Win7
    } else if (activeKey.value == 'Mac') {
        return Mac
    } else if (activeKey.value == 'Xp') {
        return Xp
    }
})
// 屏幕的高度
const height = ref(window.screen.height)
// 点击全屏事件
const full_screen = () => {
    // 是否win10,win10可以自定义背景颜色，通过query参数控制
    if (activeKey.value == 'Win10') {
        router.push({
            name: activeKey.value,
            params: { q: 'true' },
            query: { color: bjColor.value },
        })
    } else {
        router.push({ name: activeKey.value, params: { q: 'true' } })
    }
}
// win10背景颜色
const bjColor = ref('#0177d7')
</script>

<style lang="scss" scoped>
.head {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.con {
    display: flex;
    height: calc(100% - 42px);
    .left {
        flex: 1;
        .contest {
            box-sizing: border-box;
            height: 100%;
            padding-top: 50px;
            padding-left: 30px;
            padding-bottom: 20px;
            color: #fff;
            padding-right: 25px;
            
        }
    }
    .right {
        flex: 1;
        width: 50%;
        height: 100%;
        .comp {
            width: 100vw;
            height: 100vh;
            margin-top: 50px;
            transform-origin: top left;
            transform: scale(0.5);
            .mack {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
        .btns {
            position: absolute;

            top: calc(432px + 50px + 50px);
            display: flex;
            align-items: center;
        }
    }
}

.bottom {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #eee;
    font-size: 13px;
    a {
        text-decoration: none;
        color: #1e90ff;
    }
}
</style>
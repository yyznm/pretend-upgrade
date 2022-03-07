<template>
    <!-- 设置naive-ui为黑暗模式 -->
    <n-config-provider :theme="darkTheme" abstract>
        <!-- naive-ui消息组件 -->
        <n-message-provider>
            <router-view v-slot="{ Component }">
                <!-- 缓存首页 -->
                <keep-alive>
                    <component :is="Component" v-if="$route.path == '/'" :key="$route.path" />
                </keep-alive>
                <component :is="Component" v-if="$route.path != '/'" />
            </router-view>
        </n-message-provider>
    </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    overflow: hidden;
    background-color: #1e2732;
}
* {
    margin: 0;
}
</style>

<template>
    <div class="not-find">
        <div>没有发现页面</div>
        <a-button type="primary" v-on:click="backBtn">返回上一页</a-button>
    </div>
</template>
<script lang="ts" setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const backBtn = () =>{
    router.back()
}
</script>
<style >
.not-find{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    flex-direction: column;
}
</style>
<template>
    <div>
        <div class="w-[90vw] mx-auto h-30vw">
            <div class="text-center ">MV排行榜</div>
            <van-tabs v-model="active" animated >
                <van-tab title="内地"><Chinese></Chinese></van-tab>
                <van-tab title="港台"><HongKong></HongKong></van-tab>
                <van-tab title="欧美"><Europe></Europe></van-tab>
                <van-tab title="韩国"><Korea></Korea></van-tab>
                <van-tab title="日本"><Japan></Japan></van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Chinese from './child/China.vue'
import Europe from './child/Europe.vue'
import HongKong from './child/HongKong.vue'
import Japan from './child/Japan.vue'
import Korea from './child/Korea.vue'
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
export default {
    name: 'WangyiRanking',
    components: {
        Chinese,
        Korea,
        Japan,
        HongKong,
        Europe
    },
    data() {
        return {
            active: 0,
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style  scoped></style>
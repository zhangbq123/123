<template>
    <div>
        <div class="relative"> 
            <div class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center">
                <span>
                    <van-cell is-link @click="showPopup">
                        <Icon icon="material-symbols:menu" width="30" height="30" />
                    </van-cell>
                    <van-popup v-model="show" position="left" :style="{ height: '100%' }"><vant></vant></van-popup>
                </span>
                <input type="text" placeholder="Love Is Gone (Acoustic)" class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]">
                <span><Icon icon="tabler:microphone" width="30" height="30"/></span>
            </div>
            <span class="absolute bottom-[8vw] right-[18vw]"><Icon icon="teenyicons:scan-solid"  /></span>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
import vant from './vant.vue'
import { Icon } from '@iconify/vue2'
import { Popup } from 'vant';
import 'vant/lib/index.css';
Vue.use(Popup);
export default {
    name: 'WangyiSeachNav',
    components:{Icon,vant},
    data() {
        return {
            show: false,
        };
    },
    
    mounted() {
        
    },

    methods: {
        showPopup() {
            this.show = true;
        },
    },
};
</script>

<style  scoped>
    .opc{
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
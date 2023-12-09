<template>
    <div>
        <div v-for="(item,index) in datas">
            <div class="rev leading-3 text-white mt-[3vw]">
                <router-link :to="{path:'/mv',query:{id:item.id}}">
                    <img :src="item.cover" alt="" class="w-[88vw] rounded-lg">
                </router-link>    
                <span class="abs flex text-xs"><Icon icon="ph:play-thin" width="3vw"/>{{ item.score }}</span>
            </div>
            <div class=""><span class="red">{{ index+1 }}</span> <span class="font-semibold">{{ item.name }}</span></div>
            <div class="text-xs text-slate-300">{{ item.artistName }}</div>
        </div>
       <router-view></router-view>
    </div>
</template>

<script>
import {topMv} from '@/service/index'
import { Icon } from '@iconify/vue2'
export default {
    name: 'SecondChinese',
    components:{
        Icon
    },
    data() {
        return {
            datas:[]
        };
    },

    created() {
        topMv({area:'内地'})
        .then((res)=>{
            this.datas=res[1].data.data
            // console.log(this.datas);

        })
        .catch((err)=>{
            console.log(err);
        })
    },

    methods: {
        
    },
};
</script>

<style  scoped>
    .rev{
        position: relative;
    }
    .abs{
        position: absolute;
        top: 2vw;
        right: 3vw;
    }
    .red{
        color: red;
    }
</style>
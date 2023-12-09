<template>
    <div>
        <div class="w-[88vw]   mx-auto">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide rounded-lg" v-for="(item,index) in src" :key="index"><img :src="item" alt=""  class="rounded-lg"></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>

import  Swiper  from "swiper";
import {getBanner} from "@/service/index"
import 'swiper/css/swiper.min.css'

export default {
    data() {
        return {
            pit:'',
            src:[]
        };
    },
    created(){
         getBanner(2)
            .then((res) => {
                // console.log(this.res);
                this.pit=res.data.banners
                for(let key in this.pit){
                    this.src.push(this.pit[key].pic)
                }
                
            })
            .catch((err)=> console.log(err))
    },
    updated(){
        new Swiper ('.swiper-container', {
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                scrollbar: {
                el: '.swiper-scrollbar',
                
                },
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                }
            })        
            
           
           
    },
    
};
</script>

<style scoped>
    .swiper-container {
    width: 88vw;
    /* height: 300px; */
    margin: 0 auto;
}  
</style>
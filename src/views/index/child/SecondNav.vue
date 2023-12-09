<template>
    <ScrollComp class="truncate">
        
            <ul class=" mt-[3vw] w-[180vw]   ">
                <div class="flex items-center justify-between  w-[180vw]   ">
                    <div v-for="(item,index) in pit"  :key="index" class="w-[14vw]">
                        <img :src="item" alt="" >
                    </div>
                </div>
                <div class="flex items-center justify-between  w-[180vw]  ">
                    <div v-for="(tititem,titindex) in navdata" :key="titindex+15" class="w-[14vw] text-center text-xs">
                        {{ tititem }}
                    </div>
                </div>
            </ul> 
    </ScrollComp>
   
</template>

<script>
import {getHomePage} from "@/service/index"
import ScrollComp from "@/components/ScrollComp.vue";
export default {
    components:{ScrollComp},
    data(){
        return {
            ule:'',
            pit:[],
            navdata:['每日推荐','私人FM','歌单','排行榜','有声书','数字专辑','直播','关注新歌','MV','评鉴','收藏',]
        }
    },
    created(){
        getHomePage()
        .then((res)=>{
            // console.log(res.data.data.blocks);
            this.ule=res.data.data.blocks[1].creatives[0].resources
            for(let key in this.ule){
                    this.pit.push(this.ule[key].uiElement.image.imageUrl2)
                }
                // console.log(this.pit);
        })
        .catch((err)=>{console.log(err);})   
    }
};
</script>

<style scoped>

</style>
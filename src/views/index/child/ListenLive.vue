<script>
import Card from "./CardSome";
import Scroll from "@/components/ScrollComp.vue";
import { Icon } from '@iconify/vue2';
export default {
  components: { Card, Scroll ,Icon},
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  data(){
    return {
      pit:[this.resource],
      tit:[],
    }
  },
  created(){
    this.tit=this.pit[0].extInfo
    console.log(this.tit);
  }
};
</script>
<template>
    <Card :title="resource.uiElement.subTitle.title" class="mt-[5vw] ">
    <Scroll class="truncate">
            <div class="flex   flex-wrap  w-[780vw] justify-between" >
                <div v-for="(creative) in this.tit" :key="creative.id" class="w-[88vw]  ml-[3vw] mt-[2vw] flex">
                    <div>
                        <img
                        class="w-[14.5vw] h-[14.5vw] rounded-lg"
                        :src="creative.verticalCover"
                        alt=""
                    />
                    </div>
                    <div>
                        <div class="  text-xs whitespace-pre-wrap leading-[7.25vw] text-left ml-[2vw] font-bold">{{ creative.title }}</div>
                        <div class="  text-xs whitespace-pre-wrap leading-[7.25vw] text-left ml-[2vw]">{{ creative.userInfo.nickname }}</div>
                    </div>
                    

                </div>
                
            </div>
       
    </Scroll>
  </Card>
</template>
<style>
   
</style>
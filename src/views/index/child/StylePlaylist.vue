<script>
import Card from "./CardSome";
import Scroll from "@/components/ScrollComp.vue";
export default {
  components: { Card, Scroll },
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
    // console.log(this.pit);
  }
};
</script>
<template>
    <Card :title="resource.uiElement.subTitle.title" class="mt-[5vw] ">
      <Scroll class="truncate">
              <div class="flex   flex-wrap w-[388vw]">
                  <div v-for="creative in this.resource.creatives[0].resources" :key="creative.id" class="w-[88vw]  ml-[3vw] mt-[2vw] flex">
                      <div>
                          <img
                          class="w-[14.5vw] h-[14.5vw] rounded-lg"
                          :src="creative.uiElement.image.imageUrl"
                          alt=""
                      />
                      </div>
                      <div class=" h-[42px]  text-xs whitespace-pre-wrap leading-[10vw] text-left ml-[2vw]">{{ creative.uiElement.mainTitle.title }}</div>
                  </div>
                  <div v-for="creative in this.resource.creatives[1].resources" :key="creative.id" class="w-[88vw]  ml-[3vw] mt-[2vw] flex">
                      <div>
                          <img
                          class="w-[14.5vw] h-[14.5vw] rounded-lg"
                          :src="creative.uiElement.image.imageUrl"
                          alt=""
                      />
                      </div>
                      <div class="h-[42px]  text-xs whitespace-pre-wrap leading-[10vw] text-left ml-[2vw]">{{ creative.uiElement.mainTitle.title }}</div>
                  </div>
                  <div v-for="creative in this.resource.creatives[2].resources" :key="creative.id" class="w-[88vw]  ml-[3vw] mt-[2vw] flex">
                      <div>
                          <img
                          class="w-[14.5vw] h-[14.5vw] rounded-lg"
                          :src="creative.uiElement.image.imageUrl"
                          alt=""
                      />
                      </div>
                      <div class=" h-[42px]  text-xs whitespace-pre-wrap leading-[10vw] text-left ml-[2vw]">{{ creative.uiElement.mainTitle.title }}</div>
                  </div>   
                  <div v-for="creative in this.resource.creatives[3].resources" :key="creative.id" class="w-[88vw]  ml-[3vw] mt-[2vw] flex">
                      <div>
                          <img
                          class="w-[14.5vw] h-[14.5vw] rounded-lg"
                          :src="creative.uiElement.image.imageUrl"
                          alt=""
                      />
                      </div>
                      <div class=" h-[42px]  text-xs whitespace-pre-wrap leading-[10vw] text-left ml-[2vw]">{{ creative.uiElement.mainTitle.title }}</div>
                  </div>
              </div>
        </Scroll>
    </Card>
</template>
<style>
   
</style>
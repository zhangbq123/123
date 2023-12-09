<script>
import Card from "./CardSome";
import Scroll from "@/components/ScrollComp.vue";
export default {
  data(){
    return {
      id:""
    }
  },
  components: { Card, Scroll },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.resource);
  },
};
</script>
<template>
  <Card :title="resource.uiElement.subTitle.title" class="mt-[5vw] ">
    <Scroll class="truncate">
      <div class="flex  justify-between" :style="{ width: `${this.resource.creatives.length * 31 + 24}vw` }">
        <div v-for="creative in this.resource.creatives" :key="creative.id">
          <router-link :to="{path:'/music',query:{id:creative.creativeId,tit:creative.uiElement.mainTitle.title,txt:creative.uiElement.labelTexts}}" >
            <img class="w-[31vw] h-[31vw] rounded-lg" :src="creative.uiElement.image.imageUrl" alt="" />
            <div class="w-[31vw] h-[42px] text-center text-xs whitespace-pre-wrap">{{ creative.uiElement.mainTitle.title}}</div>
          </router-link>
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </Scroll>
  </Card>
</template>
<style>
.warpss {
  word-wrap: break-word;
}
</style>
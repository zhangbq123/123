<template>
    <div>
      <div class="bg-[#F4F4F4] h-[400vh]">
        <div class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
            <HeaderT></HeaderT>
        </div>   
        <Block v-for="block in blocks" :resource="block" :key="block.id" />
        <suspension ></suspension>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderT from "./child/SeachNav.vue"
import CarouselChart from "./child/CarouselChart.vue"
import SecondNav from "./child/SecondNav.vue";
import { getHomePageData, getHomepageDragonBall ,hotDetail} from "@/service";
import Block from "./child/BlockSome.vue";
import { Icon } from '@iconify/vue2'
import suspension from "@/components/suspension.vue";
// import VideoPlay
export default {
    components:{
        HeaderT,
        Icon,
        CarouselChart,
        suspension,
        SecondNav,
        Block,
        getHomePageData, 
        getHomepageDragonBall,
        hotDetail
    },
    computed:{...mapState(["blocks"])}
  };
</script>

<style  scoped>

</style>
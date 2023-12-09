<template>
    <Card :title="resource.uiElement.subTitle.title" class="mt-[3vw] ">
    <Scroll class="truncate">
        <div
            class="flex  justify-between"
            :style="{ width: `${this.resource.creatives.length * 31 + 24}vw` }"
        >
            <div v-for="creative in this.resource.creatives" :key="creative.id">
            <img
                class="w-[31vw] h-[31vw] rounded-lg"
                :src="creative.uiElement.image.imageUrl"
                alt=""
            />
            <div class="w-[31vw] h-[42px] text-center text-xs whitespace-pre-wrap">{{ creative.uiElement.mainTitle.title }}</div>
            </div>
        </div>
    </Scroll>
  </Card>
</template>

<script>
import Card from "./CardSome";
import Scroll from "@/components/ScrollComp.vue";
export default {
    name: 'WangyiRadarPlaylist',
    components: { Card, Scroll },
    props: {
        resource: {
        type: Object,
        required: true,
    },
  },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>
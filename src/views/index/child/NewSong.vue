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
  created() {
    console.log();
  },
};
</script>
<template>
  <Card :title="resource.uiElement.subTitle.title" class="mt-[3vw] ">
   
  </Card>
</template>
<style>
   
</style>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "AudioPlayer",
  components: { Icon },
  data() {
    return {
      currentRate: 0,
    };
  },
};
</script>
<template>
  <div
    class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed z-[10] bottom-0"
  >
    <div class="flex items-center">
      <div
        class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation"
      >
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
          class="absolute top-0 left-0 z-[1]"
        />
        <img
          src="https://p2.music.126.net/aPpvv-HUHJDdbFYJoA2SXg==/109951168542906852.jpg"
          class="w-[7vw] h-[7vw] rounded-[50%]"
        />
      </div>
      <div
        class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]"
      >
        <span class="text-[#3E485E]">初秋，西子湖畔，小七七</span>
        <span class="text-[#7B8591]">-花飞飞</span>
      </div>
    </div>
    <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw] overflow-hidden">
      <van-circle v-model="currentRate" :rate="30" :speed="100" />
      <Icon icon="mdi-light:home" />
    </div>
    <div class="pl-[4.5vw]">
      <Icon icon="mdi-light:home" />
    </div>
  </div>
</template>

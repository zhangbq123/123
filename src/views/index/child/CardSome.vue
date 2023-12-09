<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div>
    <div class="flex items-center justify-between ml-[3vw] w-[90vw]">
      <div class="font-semibold">{{ title }}></div>
      <div>更多</div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

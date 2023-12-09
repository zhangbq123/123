<template>
   <video src="" ref="video" id="player" playsinline controls></video>
</template>

<script>
import Plyr from 'plyr'
import "plyr/dist/plyr."
export default {
    name: 'VideoPlayer',
    props:{ 
        source:{
            type:String,
            required:true
        }
    },
    mounted() {
        new Plyr(this.$refs.video)
    },
};
</script>

<style scoped>

</style>
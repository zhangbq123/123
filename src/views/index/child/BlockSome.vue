<template>
    <component
    :is="blocksTypeComponentMap[resource.blockCode]"
    :resource="resource"></component>
</template>

<script>
import Banner from "./CarouselChart.vue";
import SecondNav from "./SecondNav.vue";
import RecommendPlaylist from "./RecommendPlaylist.vue";
import StylePlaylist from "./StylePlaylist";
import Toplist from "./TopList";
import RadarPlaylist from "./RadarPlaylist";
import NewSong from "./NewSong";
import ListenLive from "./ListenLive.vue"

const blocksTypeComponentMap = {
    HOMEPAGE_BANNER:Banner,
    HOMEPAGE_BLOCK_OLD_DRAGON_BALL:SecondNav,
    HOMEPAGE_BLOCK_PLAYLIST_RCMD: RecommendPlaylist,
    HOMEPAGE_MUSICIAN_REVISIT: NewSong,
    HOMEPAGE_BLOCK_STYLE_RCMD: StylePlaylist,
    HOMEPAGE_BLOCK_TOPLIST: Toplist,
    HOMEPAGE_BLOCK_MGC_PLAYLIST: RadarPlaylist,
    HOMEPAGE_BLOCK_LISTEN_LIVE:ListenLive
    
}
export default {
    name: 'Block',
    
    data() {
        return {
            blocksTypeComponentMap
        };
    },
    props:{
        resource:{
            type:Object,
            required:true
        }
    },
    created(){
        // console.log(blocksTypeComponentMap[this.resource.blockCode]);
    }
};
</script>

<style scoped>

</style>
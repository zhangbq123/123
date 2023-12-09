<template>
  <div >
        <ul class="w-[100vw] flex justify-around bg-white text-xs text-center fixed bottom-0">
            <li>
                <div>
                    <Icon icon="ri:netease-cloud-music-fill" width="22" height="22" color="red"/>
                </div>
                <router-link to="index">首页</router-link>
            </li>
            <li>
                <div>
                    <Icon icon="icon-park:ranking"  width="22" height="22" />
                </div>
                <router-link to="ranking">排行</router-link>
            </li>
            <li>
                <div>
                    <Icon icon="mingcute:music-line" width="22" height="22" />
                </div>
                <router-link to="mine">我的</router-link>
            </li>
            <li>
                <div>
                    <Icon icon="icon-park-twotone:collect-laptop" width="22" height="22" />
                </div>
                <router-link to="love">关注</router-link>
            </li>
            <li>
                <div>
                    <Icon icon="ph:wechat-logo-bold" width="22" height="22" />
                </div>
                <router-link to="community">社区</router-link>
            </li>
       </ul>
    
       <router-view></router-view>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'
import router from '@/router';
export default {
    components:{Icon},
    router,
    created(){
        this.$store.dispatch("requestHomePageData")
        this.$store.dispatch("requestHomePageDragonBall")
    }
}
</script>

<style>
.box{
  
}

</style>
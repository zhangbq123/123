<template>
    <div class="bg-[#272822] w-[100vw] h-[180vw] text-[8vw]">
        <div class="w-[94vw] h-[20vw] text-[#FFFFFF] flex justify-between  " >
            <span class="mt-[3vw]"><Icon icon="teenyicons:left-small-outline" /></span>
            <span class="flex mt-[3vw] justify-between w-[25vw]">
                <span><Icon icon="fluent:panel-separate-window-20-regular" /></span>
                <span><Icon icon="mingcute:more-2-fill" /></span>
            </span>
        </div>
        <div class="w-[100vw] h-[75vw] ">
            <video :src="video.url"  loop autoplay muted  ></video>
        </div>
        <div>
            <div class="flex justify-between ">
                <div class="">
                    <div class="flex">
                            <img class="w-[11vw] rounded-[50vw] h-[11vw] border-[0.5vw] text-[#FFFFFF]" :src="img.cover" alt="">
                            <span class="text-[#FFFFFF] text-[4vw] leading-[10vw] ml-4">{{img.artistName}}</span>
                            <span class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw] text-[#FFFFFF] text-[7vw] mt-[2.5vw] ml-[4vw]">+</span>
                     </div>
                     <div class="flex"> 
                        <span class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">
                            MV
                        </span>
                        <span class="text-[4vw] h-[5vw] text-[#FFFFFF] leading-[1vw] mt-[3vw] flex">
                            {{img.name}}
                             <a class="text-[6vw] text-[#FFFFFF] " @click="prop()"><Icon icon="mingcute:down-small-line" /></a> 
                         </span>
                        <span >
                         </span>   
                     </div>
                     <p class="text-[3vw] w-[50vw] text-[#FFFFFF] tre" style="height:0vw;" ref="waper" >{{img.desc}}</p>
                     <span>
                            <!-- <van-notice-bar
                             scrollable 
                             color="#FFFFFF"
                             background="#272822"
                             :text="img.name"
                            /> -->
                        </span>
                     <div>
                     </div>
                </div>
                <div>
                    <ul class="text-[6vw] w-[10vw] mt-[2vw]">
                        <li class="text-[#FFFFFF]">
                            <Icon  icon="uiw:like-o" />
                            <span class="text-[4vw]" >{{img.commentCount}}</span>
                            </li>
                        <li class="text-[#FFFFFF]">
                            <Icon icon="ant-design:message-outlined" />
                            <span class="text-[4vw]">{{img.subCount}}</span>
                            </li>
                        <li class="text-[#FFFFFF]">
                            <Icon icon="uil:share" />
                             <span class="text-[4vw]">{{img.shareCount}}</span>
                            </li>
                        <li class="text-[#FFFFFF]">
                            <Icon icon="fluent:collections-16-regular" />
                             <span class="text-[4vw]">收藏</span>
                            </li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import {getMvdice,getmvDetail} from "@/service"
import {Icon} from '@iconify/vue2'
export default {
    components:{
        Icon
    },
    data(){
        return{
            video:'',
            img:"",
            activeNames: ['1'],
        }
    },
    methods:{
        async idgive(){
          const [err,res] = await getMvdice(this.$route.query.id)
          if(err) return
          console.log(res)
          this.video= res.data.data
      },
       async idERT(){
          const [err,res] = await getmvDetail(this.$route.query.id)
          if(err) return
          console.log(res)
          this.img= res.data.data
      },
      prop(){
            this.$refs.waper.height=40+"vw"
      }
    },
    created(){
      this.idgive()
      this.idERT()
  }
}
</script>

<style>
.tre{
    transform: 1s;
}
</style>
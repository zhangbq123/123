<template>

    <div class="h-[35vw]">
      <div class="w-[100%] h-[35vw]red mt-4">
        <div class="ser w-[94vw] h-[25vw]  m-auto relative top-9 rounded-xl bg-[#FFFFFF]">
          <div class=" absolute top ml-[38%] -mt-[10vw]">
            <img class="w-[20vw] img "  :src="user.avatarUrl" alt="">
          </div>
          <div class="w-[80vw] h-[20vw] mt-[12%]  m-auto">
            <p class=" text-xl text-center">{{user.nickname}} <span></span></p>
            <div class="flex justify-around w-[45vw] m-auto">
               <span>关注 {{user.follows}}</span>|
               <span>粉丝 {{user.followeds}}</span>|
               <span>LV.{{user.follows}}</span>
             </div>
          </div> 
        </div>
      </div>  
      <div class="w-[94vw] h-[50vw] bg-[#FFFFFF] m-auto  rounded-xl mt-[3vw]">
            <ul class=" application">
                <li>
                    <span><Icon icon="carbon:play-filled" /></span>
                    <span>最近播放</span>
                </li>
                <li>
                    <span><Icon icon="entypo:music" /></span>
                    <span>本地下载</span>
                </li>
                <li>
                    <span><Icon icon="mdi:shopping" /></span>
                    <span>已购</span>
                </li>
                <li>
                    <span><Icon icon="fa-solid:user-friends" /></span>
                    <span>我的好友</span>
                </li>
                <li>
                    <span><Icon icon="iconamoon:star-fill" /></span>
                    <span>搜藏和赞</span>
                </li>
                <li>
                    <span><Icon icon="material-symbols:cloud" /></span>
                    <span>推荐精选</span>
                </li>
                <li>
                    <span><Icon icon="mingcute:fire-fill" /></span>
                    <span>云推歌</span>
                </li>
                <li>
                    <span><Icon icon="ph:cassette-tape-fill" /></span>
                    <span>经典专区</span>
                </li>
            </ul>
            <div class="w-[94vw] h-[10vw] bg-[#FFFFFF] m-auto  rounded-xl lset mt-[3vw]" >
                <p  class=" text-center  color">+  音乐应用</p>
            </div>
        </div>
        <div class=" mt-[15vw]">
        <div class="w-[94vw] h-[24vw] bg-[#FFFFFF] m-auto rounded-xl sets flex">
            <div class=" w-[18vw] h-[18vw] bg-[#72374A] rounded-xl mt-3 ml-4">
                    <Icon icon="ph:heart-fill" class="hearts text-[7vw] mt-[5.5vw] ml-[5.5vw]"  />
            </div>
            <div class="flex w-[68vw] mt-[5vw] justify-between ml-5"> 
                <div class="h-[13vw] w-[24vw] text-xl">
                    <p class="text-[3.5vw]">我喜欢的音乐</p>
                    <p class="text-[3.5vw]">首</p>
                </div>
            <div class="h-[7vw] w-[20vw] text-xl flex border like text-center mt-[4vw] rounded-2xl">
                <Icon icon="ph:heart-thin" class=" float-left heart mt-[1vw]" /> 
                <span class="text-[3.5vw]">心动模式</span>
            </div>
            </div>
        </div>
        <div class="w-[94vw] h-[70vw] m-auto mt-5">
            <div class="flex justify-around text-sm w-[60vw] m-auto">
                <span class="one">创建歌单</span>|
                <span class=" one">收藏歌单</span>
            </div>
            <div class="bg-[#FFFFFF] w-[94vw] h-[20vw] rounded-xl mt-7 collect">
            <div class="flex w-[94vw] h-[20vw] m-auto justify-between mt-3 ">
                <span class="w-[30vw] one">创建歌单</span>
                <p class="flex w-[11vw] justify-between one">
                    <span class=" icon"><Icon icon="material-symbols-light:add" width="6vw"/></span>
                    
                    <span class="iocn">
                        <Icon icon="iconoir:more-vert" width="6vw"  />
                    </span>
                </p>
            </div>
            </div>
            <div class="bg-[#FFFFFF] w-[94vw] h-[20vw] rounded-xl mt-7 collect">
            <div class="flex w-[94vw] h-[6vw] m-auto justify-between mt-7 ">
                <span class="w-[30vw] one">收藏歌单</span>
                <p class="flex w-[11vw] justify-around one">
                
                    <span class="iocn">
                        <Icon icon="iconoir:more-vert" width="6vw"  />
                    </span>
                </p>
            </div>
            <p class=" text-center one">暂无收藏歌单</p>
        </div>
    </div>
  </div>
        
    </div>
  </template>
  
  <script>
  import {getDetails} from "@/service";
  import { Icon } from '@iconify/vue2';
  export default {   
    components:{
        Icon
    }, 
    data(){
        return{
           user:[],
        }
    },
        methods:{
            async onle(){
              const [err,res] = await getDetails(3289151566)
              if(err) return
              console.log(res.data.profile)
              this.user = res.data.profile
            }
        },
        created(){
        this.onle()
      }
  }
  
  </script>
  
  <style scoped >
  .ser{
       border: 1px solid transparent;
  }
  .red{
     border: 1px solid transparent;
    background:blue;
  }
  .img{
    border-radius: 50%;
    }
    .lset{
    border-top:2px solid #F3F3F3;
    color: #C2C4CA;
    line-height: 10vw;
}
.application{
    display: flex; 
    flex-wrap: wrap;
}
.application>li{
    text-align: center;
    display: flex;
    width: 23vw;
    height: 17vw;
    flex-direction: column;
    align-items: center;
    margin-top: 7vw;
}
.application>li>span:nth-child(1){
     font-size: 10vw;
    color: red;
    display: inline-block;
    text-align: center;
}

.application>li>span:nth-child(2){
    margin-top: 3vw;
     font-size: 2vw;
}
.lead{
    line-height: 7vw;
}
  </style>
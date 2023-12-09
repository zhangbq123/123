<template>
    <div>
        <div class="w-[100vw] ">
            <div class="w-[100vw] h-[55vw]  " style="background: rgb(148, 132, 139);">
                <div class="flex justify-between pt-6vw] w-[94vw] mx-[auto] bgc text-white" >
                    <div class="flex justify-between w-[16vw] mt-[3vw]">
                        <div>
                            <Icon icon="material-symbols-light:keyboard-return" width="5vw"/>
                        </div>
                        <div>
                            歌单
                        </div>
                    </div>
                    <div class="flex justify-between w-[12vw]">
                        <div>
                            <Icon icon="material-symbols-light:search" width="5vw" />
                        </div>
                        <div>
                            <Icon icon="ci:hamburger-md" width="5vw"/>
                        </div>
                    </div>
                </div>
                <div class="flex w-[80vw] ml-[4vw] mt-[5vw]">
                    <div>
                        <img :src="pit" alt="" class="w-[20vw]"> 
                    </div>
                    <div class=" ml-[4vw]">
                        <div class="text-sm text-white font-bold">{{ tit }}</div>
                        <div data-v-32bd4a63="" class="h-[10.5vw] flex items-center">
                            <img data-v-32bd4a63="" alt="" class="w-[6vw] h-[6vw] rounded-[50%]" src="http://p1.music.126.net/xPhD79lgWzFM-eKGo_NA7A==/109951168225170918.jpg"> 
                            <span data-v-32bd4a63="" class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">   芳心收集人</span> 
                            <span data-v-32bd4a63="" class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                                <svg data-v-32bd4a63="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="text-[4vw] text-[#fff] iconify iconify--material-symbols">
                                <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"></path></svg>关注
                            </span>         
                        </div>
                        <div class="flex ">
                            <div  v-for="item in txt">
                                <div class="flex items-center justify-center pl-[2.2vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.6vw] text-xs">{{ item }}></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div>

                </div>
                <div class="flex justify-between w-[86vw] mx-auto mt-[3vw]">
                    <div data-v-32bd4a63="" class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                        <svg data-v-32bd4a63="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" style="color: white;">
                            <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19l6.4-7z"></path>
                        </svg> 0
                    </div>
                    <div data-v-32bd4a63="" class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]">
                        <svg data-v-32bd4a63="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 1024 1024" class="text-[5vw] mr-[1.8vw] iconify iconify--ant-design" style="color: white;">
                            <path fill="currentColor" d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3a443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48z"></path>
                        </svg> 1
                    </div>
                    <div data-v-32bd4a63="" class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                        <svg data-v-32bd4a63="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="text-[5vw] mr-[1.8vw] iconify iconify--mdi" style="color: white;">
                            <path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3L5.8 21M17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Z"></path>
                        </svg>61
                    </div>
                </div>
            </div>
            <div class=" w-[94vw] ml-[4vw] mt-[4vw]">
                <div class="flex w-[94vw]">
                    <div><Icon icon="carbon:play-filled" color="red" width="6vw" /></div>
                    <div class="ml-[5vw]" @click="mixin_player.replaceTracks(playlist.map(({ id }) => id))">播放全部 ({{ add.length }})</div>
                    <div><Icon icon="iconoir:download" width="6vw"  class="ml-[35vw]"/></div>
                    <div><Icon icon="ci:hamburger-md" width="6vw" class="ml-[5vw]"/></div>
                </div>
                <div v-for="(items,index) in add" class="flex items-center h-[14vw]">
                    <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] flex items-center justify-center">{{ index+1 }}</div>
                    <div class="font-medium text-[3.6vw] w-[64vw]">
                        <div class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                            <span class="text-ellipsis text-[#000] ">{{ items.name }}</span>
                        </div>
                        <div class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">{{ items.ar[0].name }}</div>
                    </div>
                    <div class="ml-[4.6vw] text-[6vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--arcticons">
                        <Icon icon="icon-park-outline:play-two" width="5vw"  />
                    </div>
                    <div class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--ri">
                        <Icon icon="material-symbols-light:more-vert" width="5vw" />
                    </div>
                </div>
            </div>
            <!-- <Directory class="fixed top-0" :message="parentMessage"></Directory> -->
        </div>
    </div>
</template>

<script>
import {getMusic} from "@/service/index"
import { Icon } from '@iconify/vue2';
import Directory from "@/components/Directory.vue";
export default {
    name: 'SecondMineMusic',
    
    
    data() {
        return {
            add:[],
            tit:'',
            pit:"",
            txt:[],
            playlist: [] ,
            parentMessage:''
        };
    },

    created() {
        getMusic(this.$route.query.id)
            .then((res) => {
                this.add=res[1].data.songs
                this.pit=res[1].data.songs[0].al.picUrl
                // console.log(this.add);
                this.parentMessage=this.add
                console.log(this.parentMessage);
            })
            .catch((err)=> console.log(err))
        this.tit=this.$route.query.tit
        this.txt=this.$route.query.txt
    },
    

    methods: {
        
    },
    components:{
        Icon,
        Directory
    },
};
</script>

<style  scoped>

</style>
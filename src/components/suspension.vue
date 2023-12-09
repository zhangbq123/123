<template>
    <div>
        <div data-v-36d9f586=""
            class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed bottom-[10vw] bg-[#fff] z-[10] bottom-0">
            <div data-v-36d9f586="" class="flex items-center">
                <div data-v-36d9f586="" class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation">
                    <img data-v-36d9f586="" src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt=""
                        class="absolute top-0 left-0 z-[1]"> <img data-v-36d9f586=""
                        src="https://p1.music.126.net/CtnXWSel7bUcSU-EfpDeag==/109951168944201582.jpg" alt=""
                        class="w-[7vw] h-[7vw] rounded-[50%]"></div>
                <div data-v-36d9f586=""
                    class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]"><span
                        data-v-36d9f586="" class="text-[#3E485E]">风之海</span> <span data-v-36d9f586=""
                        class="text-[#7B8591]">-华晨宇</span></div>
            </div>
            <div data-v-36d9f586="" class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw] overflow-hidden">
                <div data-v-36d9f586="" class="van-circle" style="width: 5.6vw; height: 5.6vw;"><svg
                        viewBox="0 0 1120 1120">
                        <path d="M 560 560 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000"
                            class="van-circle__layer" style="fill: none; stroke: rgb(199, 203, 210); stroke-width: 120px;">
                        </path>
                        <path d="M 560 560 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000"
                            class="van-circle__hover"
                            style="stroke: rgb(71, 81, 101); stroke-width: 121px; stroke-dasharray: 1136.57px, 3140px;">
                        </path>
                    </svg></div> <svg @click="f1" data-v-36d9f586="" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="11px" height="11px"
                    viewBox="0 0 32 32"
                    class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute iconify iconify--carbon">
                    <path fill="currentColor"
                    d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z">
                </path>
            </svg>
        </div>
        <div data-v-36d9f586="" class="pl-[4.5vw]"><svg data-v-36d9f586="" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em"
                viewBox="0 0 24 24" class="text-[6vw] text-[#3b4152] iconify iconify--iconamoon">
                
                    
                    <path fill="currentColor" fill-rule="evenodd"
                    d="M7 6a1 1 0 0 1-.5.866l-3 1.732A1 1 0 0 1 2 7.732V4.268a1 1 0 0 1 1.5-.866l3 1.732A1 1 0 0 1 7 6Zm-4 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Zm6-5a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1ZM3 17a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
                    clip-rule="evenodd">
                    
                    </path>
               
            </svg></div> 
    </div>
</div></template>
<script>
import Player from "./AudioPlayer/play.js"

import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);
const player = new Player()
import Directory from './Directory.vue';
export default {
    name: 'SecondSuspension',
    components:{Directory},
    data() {
        return {
            tracks: ["26353080", "1417849873", "1950824658", "2049512697"],
            show: false,
        };
    },

    mounted() {

    },

    methods: {
        showPopup() {
            this.show = true;
        },
        f1(){
        player.replaceTracks(this.tracks)
    }
    },
};
</script>

<style lang="scss" scoped></style>
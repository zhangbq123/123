<template>
    <div>
        <div v-if="ok">
            <div class="w-[87vw] mx-auto mt-[15vw] flex justify-between text-slate-400">
            <div>X</div>
                <div>游客登录</div>
            </div>
            <div class="mt-[29vw] mx-auto w-[19vw] h-[19vw]">   
                <Icon icon="ri:netease-cloud-music-fill" color="red" width="19vw" height="19vw" />
            </div>
            <input type="number" maxlength="4" minlength="4">
            <div class="w-[74vw] mx-auto rounded-xl bg-slate-200 h-[15vw] flex ">
                <select name="" id="" class="font-semibold noneinp ml-[3vw] bg-slate-200">
                    <option value="Option1">+86</option>
                </select>
                <input type="tel" v-model="phone" class="border-0 noneinp bg-slate-200">
                <div class="w-[5vw] h-[5vw] mt-[5vw] ml-[3vw] text-center lineh bg-slate-300 rounded-[50%]">x</div>
            </div>
            <div @click="sendCode()" class="mx-auto w-[74vw] text-center h-[12vw] bg-red-600 rounded-2xl  text-white mt-[5vw] leading-[12vw]">获取验证码</div>
            <div class="flex mt-[5vw] ml-[12vw]">
                <input type="checkbox" v-model="one">
                
                <span class="text-slate-300">我已阅读并同意</span>
                <div class="text-cyan-600">《服务条款》、《隐私政策》</div>
            </div>
        </div>
        <div v-if="!ok">
            <div class="w-[87vw] mx-auto mt-[15vw] flex justify-between text-slate-400">
                <div>X</div>
                <div>游客登录</div>
            </div>
            <div class="text-2xl font-semibold ml-[6.5vw]">输入验证码</div>
            15623901878
            <div class=" ml-[6.5vw]">验证码已发送至 +85 {{ phone }}</div>
            <div>
                    <!-- 密码输入框 -->
                    <van-password-input :value="value" :length="4" :focused="showKeyboard" @focus="showKeyboard = true" @input="login()"/>
                    <!-- 数字键盘 -->
                    <van-number-keyboard v-model="value" :show="showKeyboard" @blur="showKeyboard = false" />
                    <button @click="login()" class="mx-[48vw] w-[6vw]">登录</button>
            </div>
        </div>
            
    </div>
</template>

<script>
import Vue from 'vue';
import {getCaptcha,loginCellphone} from "@/service"
import { Icon } from '@iconify/vue2';
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
export default {
    components:{
        Icon
    },
    data(){
        return {
            value: '',
            errorInfo: '',
            showKeyboard: true,
            phone:"",
            captcha:'',
            one:'',
            ok:true
        }
    },
    watch:{
        value(value){
            if(value.length==4){
                this.captcha = value
                console.log(value);
            }
        }
    },
    methods:{
        async sendCode(){
            if(this.one==true){
                if(!(/^1[356789]\d{9}$/.test(this.phone))) return alert("手机号不合法")
                const [err,res]=await getCaptcha({phone:this.phone})
                console.log(res);
                if(err) return alert("请求错误，请稍后再试")
                alert("验证码发送成功")
                this.ok=false
            }else{
                alert('必须勾选协议')
            }
       
        },
        async login(){
            if(!/^\d{4}$/.test(this.captcha)) return alert("验证码不合法")
            this.$store.dispatch("requestLoginCellPhone")
            const [err,res]=await loginCellphone({
                phone:this.phone,
                captcha:this.captcha
            })
            if(err) return alert("登录失败")
            console.log(res);
    }
}
}
</script>
<style>
    .noneinp{
        outline: none;
        line-height: 15vw;
    }   
    .lineh{
        line-height: 5vw;
        color: white;
    }
</style>


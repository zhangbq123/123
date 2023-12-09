//对axios做一些配置
import store from "@/store";
import axios from "axios";
import axiosRetry from "axios-retry";
//axios.create返回值一个新的axios的实例
const request=axios.create({
    baseURL:"http://localhost:3000",//更改请求路径
    timeout:3000,
    withCredentials:true//跨域携带cookie
})
axiosRetry(request,{retries:3})
//_axios和axios 99% 功能一致


//每一次请求都会出发的函数如何设置（请求拦截器）
//如何设置？

request.interceptors.request.use((config)=>{
    const cookie = store.state.auth.cookie
    // console.log(config);
    // config是你每一次发起请求的详细配置
    // 在这个位置可以对请求配置做更改
    
    //策略模式
    // if(cookie){
    //     ({
    //         get(){
    //             config || (config.data={})
    //         },
    //         post(){
    //             config || (config.params={})
    //             config.params.cookie=cookie
    //         }
    //     })[config.method]()
    // }
    if(cookie){
        // console.log(cookie);
        if(config.method==="post"){
            config.data || (config.data={})
            config.data.cookie=cookie
        }
        if(config.method==="get"){
            config.params || (config.params={})
            config.params.cookie=cookie
        }
    }
    return config
})
window.request = request
export default request
//axios.get("/abc") => http://localhost:8080/abc
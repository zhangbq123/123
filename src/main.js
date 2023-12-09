import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import store from './store'
import {Icon} from '@iconify/vue2'
import AudioPlayer from "@/components/AudioPlayer"
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import "@/assets/main.css"
// Vue.$use=function(module){
//   if(typeof module === 'function'){
//       module(this)//this -> Vue
//   }else if(typeof module.install === "function"){
//       module.install(this)//this -> Vue
//   }
// }
// Vue.$use(AudioPlayer)
Vue.use(AudioPlayer)
//Vue.use(Module)Module要求是什么？
//1.Module本身是一个函数
//2.Module不是一个函数但是具备一个install方法
Vue.config.productionTip = false
Vue.component('VueSlider', VueSlider)
Vue.component('icon',Icon)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

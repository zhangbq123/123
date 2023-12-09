//引入顺序 vue及其附属的包 第三方 自己写的
import Vue from "vue"
import VueRouter from "vue-router"
import routes from "@/router/routes"
//核心作用：注册两个全局组件 router-link router-view
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes,
})

export default router
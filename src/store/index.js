import Vue from "vue";
import Vuex from "vuex"
import persistedstate from "vuex-persistedstate"
import { getHomePageData, getHomepageDragonBall, loginCellphone } from "@/service";
Vue.use(Vuex)
const store = new Vuex.Store({
    //state 存储公共数据
    state: {
        a: 123,
        blocks: [],
        menus:[],
        auth:{}
    },
    //mutations 定义同步修改公共数据的方法
    mutations: {
        updateBlocks(state, res) {
            state.blocks = res.data.data.blocks
        },
        updateMenus(state, res) {
            state.menus = res.data.data
        },
        updateAuth(state, res) {
            state.auth = res.data
        }
    },
    //actions 定义异步修改公共数据的方法(借助mutations)
    actions: {
        async requestHomePageData(store) {
            const [err, homePageData] = await getHomePageData()
           if(err) return
           store.commit("updateBlocks",homePageData)
        },
        async requestLoginCellPhone(store,data) {
            const [err, res] = await loginCellphone(data)
            if (err) return alert("请求错误，请稍后重试")
            store.commit("updateAuth",res)
        },
        async requestHomePageDragonBall() {
            const [err, homePageDragonBall] = await getHomepageDragonBall()
            if (err) return
            store.commit("updateMenus", homePageDragonBall)
        },
    },
    //plugins 扩展其他额外功能
    plugins: [persistedstate()]
})
window.store = store

export default store
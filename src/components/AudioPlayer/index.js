import Main from "./main.vue";
import Player from "./play";
export default {
  install(Vue) {
    Vue.component(Main.name, Main);
    // 全局混入响应的player的实例 方便在任何组件中调用
    Vue.mixin({
      computed: {
        mixin_player() {
          return Vue.observable(new Player());
        },
      },
    });
  },
};

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 自己设置叫正向代理 其他设置叫反向代理
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
})

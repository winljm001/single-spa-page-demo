module.exports = {
  devServer: {
    headers:{"Access-Control-Allow-Origin":"*"},
    port:3013, // 启动端口
    open:true  // 启动后是否自动打开网页
  },
  configureWebpack: {
    output: {
      library: 'contentApp',
      libraryTarget: 'umd'
    }
  }
}
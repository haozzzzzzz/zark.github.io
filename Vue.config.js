module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        'target': 'http://192.168.210.120:5000',
        changeOrigin: true
      },
      pathRewrite: {
          '^/api': '',
          target: 'http://192.168.210.120:5000',
      // 前面的^api 代表 target 的链接跟请求的地址拼接
      }
    }
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/server': {
        target: 'http://localhost:3333',
        pathRewrite: {
          '^/server': 'http://localhost:3333'
        },
        changeOrigin: false
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://zw-lazy.cn/backend/' : '/'
}
module.exports = {
  devServer: {
    host: 'localhost',
    port: 9999,
    proxy: {
      '/server': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/server': 'http://localhost:8080'
        },
        changeOrigin: false 
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://47.98.177.236:80/backend' : '/'
}
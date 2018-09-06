module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        pathRewrite: {
          '^/api': 'http://localhost:3333'
        },
        changeOrigin: false
      }
    }
  }
}
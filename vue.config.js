let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const mockIndexData = require('./mock/index.json')
const mockCityData = require('./mock/city.json')
const mockDetailData = require('./mock/detail.json')
module.exports = {
  baseUrl: '/',
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before(app) {
      app
        .get('/api/index', (req, res) => {
        res.json(mockIndexData)
      })
        .get('/api/city', (req, res) => {
          res.json(mockCityData)
        })
        .get('/api/detail', (req, res) => {
          res.json(mockDetailData)
        })
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('./src/assets/styles')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}
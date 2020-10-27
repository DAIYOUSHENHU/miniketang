const path = require('path');        
function resolve(dir){
    return path.join(__dirname,dir) 
}

module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
        
        .set('@',resolve('./src'))
        .set('assets',resolve('@/assets'))
        .set('common',resolve('@/common'))
        .set('network',resolve('@/network'))
        .set('components',resolve('@/components'))
        .set('views',resolve('@/views'))
  },
  
  pwa: {
    iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
    }
  },

}
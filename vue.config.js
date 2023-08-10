// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   // outputDir:'./dist/resume',
//   // publicPath:'/EditResume/',
// })
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/my-project/'
      : '/'
}


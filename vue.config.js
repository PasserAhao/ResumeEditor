// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   // outputDir:'./dist/resume',
//   // publicPath:'/EditResume/',
// })

// 用于github pages
module.exports = {
  outputDir:'./Editor',
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Editor/'
      : '/'
}


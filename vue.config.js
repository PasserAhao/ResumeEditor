// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   // outputDir:'./dist/resume',
//   // publicPath:'/EditResume/',
// })

// 用于github pages
module.exports = {
  lintOnSave: true,
  outputDir: './dist',
  publicPath: process.env.NETLIFY === 'true'
    ? '/'
    : process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_PUBLIC_PATH || '/resumeeditor/'
      : '/',
}

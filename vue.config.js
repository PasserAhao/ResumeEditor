// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   // outputDir:'./dist/resume',
//   // publicPath:'/EditResume/',
// })

// 用于github pages
module.exports = {
  lintOnSave: true, // 暂时关闭代码格式检测
  outputDir: './editor',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume-project-testing/'
    : '/',
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
            happyPackMode:true
          }
        }
      ]
    }
  }
}


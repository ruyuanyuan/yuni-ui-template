module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 8888,
      https: false,
      hotOnly: false,
      overlay: {
            warnings: false,
            errors: false
      },
      before: (app) => {
      }
    }
  }
  
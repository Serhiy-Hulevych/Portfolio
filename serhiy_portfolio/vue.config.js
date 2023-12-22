const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
  publicPath: '/serhiy-portfolio/',
  chainWebpack: (config) => {
    // Add a rule for PDF files
    config.module
      .rule('pdf')
      .test(/\.(pdf)$/i)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      });
  },
});

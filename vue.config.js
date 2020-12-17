const { VuetifyLoaderPlugin } = require("vuetify-loader");

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tasty-twitter'
    : '/',
  pages: {
    main: {
      entry: "src/app/index.ts",
      template: "public/index.html",
      title: "Tasty Twitter",
      filename: "index.html"
    }
  },
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  }
};

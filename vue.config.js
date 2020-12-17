const { VuetifyLoaderPlugin } = require("vuetify-loader");

module.exports = {
  lintOnSave: false,
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

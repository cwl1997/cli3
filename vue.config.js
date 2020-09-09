module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          // 要公用的scss的路径
          resources: "./src/styles/elementUi.scss"
        })
        .end();
    });
  },
  lintOnSave: false,
  devServer: {
    https: false,
    proxy: {
      "/api": {
        // target: "http://apis.elongai.com/vi",
        target: "http://xycf.chxtx.cn/api/blade-shopping/shopping",
        // target: "http://localhost:3000",
        // target: "http://49.234.56.112/blade-sparepart-lj/transport",
        changOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};

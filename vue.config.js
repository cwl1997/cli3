module.exports={
    lintOnSave:false,
    devServer: {
        https:false,
        proxy: {
            "/api": {
                // target: "http://apis.elongai.com/vi",
                target: "http://xycf.chxtx.cn/api/blade-shopping/shopping",
                // target: "http://localhost:3000",
                // target: "http://49.234.56.112/blade-sparepart-lj/transport",
                changOrigin: true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                  }
            },
        }
    }
}
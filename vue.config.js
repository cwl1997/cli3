module.exports={
    lintOnSave:false,
    devServer: {
        proxy: {
            "/api": {
                target: "https://api.jisuapi.com",
                changOrigin: true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                  }
            },
        }
    }
}
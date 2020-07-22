module.exports={
    lintOnSave:false,
    devServer: {
        proxy: {
            "/api": {
                // target: "https://api.jisuapi.com",
                target: "http://localhost:3000",
                changOrigin: true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                  }
            },
        }
    }
}
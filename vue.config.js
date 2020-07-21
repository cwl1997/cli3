module.exports={
    lintOnSave:false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changOrigin: true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                  }
            },
            "/project": {
                target: "http://www.baidu.com",
                changOrigin: true
            },
            "/facility": {
                target: "http://www.baidu.com",
                changOrigin: true
            },
            "/log": {
                target: "http://www.baidu.com",
                changOrigin: true
            },
            "/fileHandle": {
                target: "http://www.baidu.com",
                changOrigin: true
            }
        }
    }
}
module.exports = {
    // 开发服务器设置
    devServer: {
        open: true,
        
        port: 3000,
        
        overlay: false,
        // vue项目代理请求
        proxy: {
            "/aapi": {
                target: "http://kumanxuan1.f3322.net:8001/",
                changeOrigin: true,
                pathRewrite: {
                    "/aapi": "",
                },    
            }
            ,
            "/bpi": {
                target: "https://reactapi.iynn.cn/",
                changeOrigin: true,
                pathRewrite: {
                    "^/bpi": "",
                },    
            },
            "/cpi": {
                target: "https://m.28sjw.com/",
                changeOrigin: true,
                pathRewrite: {
                    "^/cpi": "",
                },    
            },
        },
        
    },
};
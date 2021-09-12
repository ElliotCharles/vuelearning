module.exports = {
    // 开发服务器设置
    devServer: {
        open: true,
        
        port: 3000,
        
        overlay: false,
        // vue项目代理请求
        proxy: {
            "/api": {
                target: "http://kumanxuan1.f3322.net:8001/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
};
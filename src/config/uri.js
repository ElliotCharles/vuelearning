let prefix = process.env.VUE_APP_API_PREFIX

let uri = {
    // 首页数据地址
    getHome:prefix + "/index/index",
    // channelList首次请求
    getCategoryNav:prefix+"/goods/category",
    // 类别数据地址
    getCategoryList:prefix + "/goods/list",
    // 查看商品的详情信息
    getDetail:prefix+"/goods/detail",
    getPop:prefix + "/search/index",
    getGoodlist:prefix + "/goods/list",
    cleanHistory:prefix + "/search/clearhistory",
    getCategory:prefix+"/catalog/index",
    getCatelog:prefix+"/catalog/current"
}

export default uri
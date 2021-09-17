let prefix = process.env.VUE_APP_API_PREFIX

let uri = {
    getHome:prefix + "/index/index",
    getPop:prefix + "/search/index",
    getGoodlist:prefix + "/goods/list",
    cleanHistory:prefix + "/search/clearhistory",
    getCategory:prefix+"/catalog/index",
    getCatelog:prefix+"/catalog/current"
}

export default uri
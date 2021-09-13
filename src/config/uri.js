let prefix = process.env.VUE_APP_API_PREFIX

let uri = {
    getHome:prefix + "/index/index",
    getPop:prefix + "/search/index",
    getGoodlist:prefix + "/goods/list"
}

export default uri
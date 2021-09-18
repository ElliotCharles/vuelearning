import axios from "axios";
// 请求拦截器
axios.interceptors.request.use((cfg) => {

    return cfg;
});

axios.interceptors.response.use((res) => {

    return res && res.data 
});

// 导出axios
export default axios;
import axios from "axios";

axios.interceptors.request.use((cfg) => {
    return cfg;
});

axios.interceptors.response.use((res) => {

    return res 
});

// 导出axios
export default axios;
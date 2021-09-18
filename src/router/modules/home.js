import index from "@/views/home/index"
import categoryList from "@/views/home/channelList"
const homeRoutes=[
    {
    path:"/index",
    component:index
    },
    {
    path:"/category",
    component:categoryList,
    }
]


export default homeRoutes;
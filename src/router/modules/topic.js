import topic from "@/views/topic/index"
import suggest from "@/views/topic/suggest"
import drop from "@/views/topic/drop"

const topicRoutes=[
    {
    path:"/topic",
    component:topic,
    children:[{
        path:"suggest",
        component:suggest
    },
    {
        path:"drop",
        component:drop
    }
]
    }
]

export default topicRoutes;
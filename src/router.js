import { createRouter} from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import Home from '@/view/Home'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('@/view/Todos.vue')
        }
    ]
})

export default router
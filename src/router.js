import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Experts from './views/Experts.vue'
import Debate from './views/Debate.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/Experts',
        component: Experts
    },
    {
        path:'/Debate',
        component: Debate
    }
]

const router = createRouter({
    history: createWebHashHistory (),
    routes 
})
export default router
import { createRouter, createWebHashiHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Experts from './views/Experts.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
]

const router = createRouter({
    history: createWebHashiHistory (),
    routes 
})
export default router
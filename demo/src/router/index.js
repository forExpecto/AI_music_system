import { createRouter, createWebHashHistory } from "vue-router";
import HomePart from "@/views/HomePart.vue";
import LookForMusic from "@/views/LookForMusic.vue";
import MyMusic from "@/views/MyMusic.vue";
import MusicCommunity from "@/views/MusicCommunity.vue";
import LoginView from "@/views/Login/LoginView.vue";
import Register from "@/views/Login/RegisterView.vue";
import PlayView from "@/views/MusicPlayView/PlayView.vue";


const routes = [
    {
        path: '/',
        component: HomePart
    },

    {
        path: '/lookForMusic',
        component: LookForMusic
    },
    {
        path: '/myMusic',
        component: MyMusic
    },
    {
        path: '/musicCommunity',
        component: MusicCommunity
    },
    {
        path: '/login',
        component: LoginView
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/playView',
        component: PlayView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;
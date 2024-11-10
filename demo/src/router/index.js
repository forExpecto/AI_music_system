import { createRouter, createWebHashHistory } from "vue-router";
import LookForMusic from "@/views/LookForMusic.vue";
import MyMusic from "@/views/MyMusic/MyMusic.vue";
import MusicCommunity from "@/views/Community/MusicCommunity.vue";
import LoginView from "@/views/Login/LoginView.vue";
import Register from "@/views/Login/RegisterView.vue";
import PlayView from "@/views/MusicPlayView/PlayView.vue";
import RecommendMusic from "@/components/RecommendMusic.vue";
import SearchView from "@/views/Search/SearchView.vue";
import AudioPlay from "@/views/MusicPlayView/AudioPlay.vue";


const routes = [
    {
        path: '/',
        component: LookForMusic,
        redirect: '/LookForMusic'
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
    },
    {
        path: '/recommendMusic',
        component: RecommendMusic

    },
    {
        path: '/SearchView',
        component: SearchView
    },
    {
        path: '/audioPlay',
        component: AudioPlay
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;
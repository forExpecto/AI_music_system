import { createRouter, createWebHashHistory } from "vue-router";
import HomePart from "@/views/HomePart.vue";
import MusicPart from "@/views/MusicPart.vue";
import ArtistPart from "@/views/ArtistPart.vue";
import LookForMusic from "@/views/LookForMusic.vue";
import MyMusic from "@/views/MyMusic.vue";
import MusicCommunity from "@/views/MusicCommunity.vue";


const routes = [
    {
        path: '/',
        component: HomePart
    },
    {
        path: '/music',
        component: MusicPart
    },

    {
        path: '/artist',
        component: ArtistPart
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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;
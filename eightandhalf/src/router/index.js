import { createRouter, createWebHashHistory } from "vue-router";
import HomePart from "@/views/HomePart.vue";
import MusicPart from "@/views/MusicPart.vue";
import ArtistPart from "@/views/ArtistPart.vue";

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;
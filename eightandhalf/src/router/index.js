import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/HomePart.vue';
import Music from '../views/MusicPart.vue';
import Artist from '../views/ArtistPart.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/music',
        name: 'music',
        component: Music
    },

    {
        path: '/artist',
        name: 'artist',
        component: Artist
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;
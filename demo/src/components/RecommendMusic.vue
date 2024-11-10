<template>
    <div>
        <button @click="btn">111</button>
    </div>
</template>



<script>
import { RecommendMusicAPI } from '@/api';

export default {

    data() {
        return {
            recommendmusic: [],
        }
    },
    methods: {
        async getRecommendMusic() {
            const res = await RecommendMusicAPI();
            console.log(res);

        },
        btn() {
            this.getRecommendMusic();
        }


    }
}
</script>

<style scoped>
hello {
    color: red;
    width: 100px;
    height: 100px;
}
</style>
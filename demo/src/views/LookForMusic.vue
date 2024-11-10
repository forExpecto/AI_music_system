<template>
    <div>
        <CarouselComponent />
        <el-container>
            <el-header>
                <!-- <h1>音乐列表</h1> -->
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="4" v-for="(song, index) in songs" :key="index">
                        <el-card class="song-card">
                            <div class="song-info">
                                <img :src="song.picUrl" alt="歌曲图片" width="150px" height="150px" />
                                <h3>{{ song.name }}</h3>
                                <p>{{ song.artist }}</p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { RecommendMusicAPI } from '@/api';
import CarouselComponent from '@/components/CarouselComponent.vue';



export default {
    components: {
        CarouselComponent
    },
    data() {
        return {
            songs: [],

        };
    },
    methods: {


    },
    created() {
        RecommendMusicAPI().then((res) => {
            console.log(res);
            this.songs = res.data.result;
        });



    }
};
</script>

<style scoped>
.song-card {
    margin: 10px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.song-info {
    text-align: center;
}
</style>

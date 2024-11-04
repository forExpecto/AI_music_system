<template>
    <div>
        <el-container>
            <el-header>
                <!-- <h1>音乐列表</h1> -->
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="6" v-for="(song, index) in songs" :key="index">
                        <el-card class="song-card">
                            <div class="song-info">
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
export default {
    data() {
        return {
            songs: [
                { name: '歌曲1', artist: '歌手1' },
                { name: '歌曲2', artist: '歌手2' },
                { name: '歌曲3', artist: '歌手3' },
                { name: '歌曲4', artist: '歌手4' },
                { name: '歌曲5', artist: '歌手5' },
                { name: '歌曲6', artist: '歌手6' },
                { name: '歌曲7', artist: '歌手7' },
                { name: '歌曲8', artist: '歌手8' },


            ]
        };
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

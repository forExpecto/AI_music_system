<template>
    <div class="container">
        <div class="searchitems">
            <input type="text" v-model="searchvalue">

            <submit @click="getSearchMusic"> <el-button>搜索</el-button></submit>

            <ul>
                <li v-for="(item, index) in searchmusic" :key="item.id">
                    {{ index }}
                    <img src="@/assets/Play/play.png" @click="play(item.id)" alt="歌曲图片" width="15px" height="15px">
                    {{ item.name }}
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import { SearchMusicAPI } from '@/api';
export default {
    data() {
        return {
            searchvalue: '',
            searchmusic: [],
        }
    },
    methods: {
        async getSearchMusic() {
            const res = await SearchMusicAPI({
                keywords: this.searchvalue,
            });
            this.searchmusic = res.data.result.songs;
            console.log(res);
        }

    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #f5f5f5;
}

.searchitems {
    width: 50%;

    top: 50px;
    margin: 0px auto;
    border: black 1px solid;

}

ul {
    list-style-type: none;
    padding: 0;
    /* 移除默认的内边距 */
}

li:nth-child(odd) {
    background-color: white;
}

li:nth-child(even) {
    background-color: #F2F2F2;
}
</style>
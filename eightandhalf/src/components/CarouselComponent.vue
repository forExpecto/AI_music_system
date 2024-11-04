<template>
    <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
            <img :src="require(`@/assets/Carousel/image${item}.jpg`)" alt="carousel-image" class="carousel-image" />
        </el-carousel-item>
    </el-carousel>
</template>

<style>
.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
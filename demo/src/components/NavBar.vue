<template>
    <div class="navbar" :class="{ 'fixed': isFixed }">
        <div class="navbar-content">
            <!-- Logo -->
            <img src="@/assets/Login/eight_and_half_logo1.jpg" alt="logo" class="logo" />

            <!-- 导航链接 -->
            <nav class="nav-links">
                <router-link to="/lookForMusic">发现音乐</router-link>
                <router-link to="/myMusic">我的音乐</router-link>
                <router-link to="/musicCommunity">社区</router-link>
                <router-link to="/SearchView">搜索</router-link>
            </nav>

        </div>
    </div>
    <router-view class="page-content" />
</template>





<style scoped>
.demo-type {
    display: flex;
}

.demo-type>div {
    flex: 1;
    text-align: center;
}

.demo-type>div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}
</style>



<script>
export default {
    components: {

    },
    name: 'NavBar',
    data() {
        return {
            isFixed: false
        };
    },
};
</script>


<style scoped>
.navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #229094;
    transition: all 0.3s ease;
    padding: 10px 20px;
    z-index: 10;
}

.navbar.fixed {
    position: fixed;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.nav-links {
    position: absolute;
    left: 100px;
    display: flex;
    gap: 20px;
    color: #fff;
    font-size: 16px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.nav-links a:hover {
    background-color: #1e7f8a;
}

.nav-links a.router-link-active {
    background-color: #1e7f8a;
}



.page-content {
    margin-top: 70px;
    /* 确保页面内容不被导航栏遮挡 */
}
</style>

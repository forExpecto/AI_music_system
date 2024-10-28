<template>
    <div class="navbar" :class="{ 'fixed': isFixed }">
        <nav>
            <router-link to="/">首页</router-link>
            <router-link to="/lookForMusic">发现音乐</router-link>
            <router-link to="/myMusic">我的音乐</router-link>
            <router-link to="/musicCommunity">音乐社区</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isFixed: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isFixed = window.scrollY > 0;
        }
    }
};
</script>

<style scoped>
.navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    transition: all 0.3s ease;
}

.navbar.fixed {
    position: fixed;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

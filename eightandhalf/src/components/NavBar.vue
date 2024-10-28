<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            // 在这里定义组件的数据
        };
    },
    methods: {
        // 在这里定义组件的方法
    },
    computed: {
        // 在这里定义组件的计算属性
    },
    components: {
        // 在这里引入其他组件
    }
};
</script>

<style scoped></style>

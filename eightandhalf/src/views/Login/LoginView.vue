<template>
    <div class="app-container">
        <div class="login-container">
            <!-- 添加 logo 图片 -->
            <img :src="logo" alt="logo" class="logo-image" />

            <h2>八部半</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">用户名</label>
                    <input type="text" id="username" v-model="username" placeholder="请输入用户名" required />
                </div>

                <div class="form-group">
                    <label for="password">密码</label>
                    <input type="password" id="password" v-model="password" placeholder="请输入密码" required />
                </div>

                <button type="submit" class="login-button">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/Login/eight_and_half_logo1.jpg'; // 导入 logo 图片

export default {
    data() {
        return {
            username: '',
            password: '',
            logo, // 使用导入的 logo 图片
        };
    },
    methods: {
        login() {
            if (this.username && this.password) {
                console.log('登录成功', this.username, this.password);
            } else {
                alert('请输入用户名和密码');
            }
        },
    },
};
</script>

<style scoped>
.app-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #229094, #99C9CC);
}

.login-container {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: white;
}

.login-container:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translate(-5px, -5px);
}

.logo-image {
    width: 80px;
    /* 设置 logo 图片宽度 */
    margin-bottom: 10px;
    /* 设置 logo 图片与标题之间的距离 */
}

h2 {
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

label {
    width: 80px;
    /* 固定宽度以对齐输入框 */
    font-weight: bold;
}

input {
    flex: 1;
    /* 填充剩余空间 */
    padding: 8px;
    box-sizing: border-box;
}

.login-button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-button:hover {
    background-color: #36a173;
}
</style>

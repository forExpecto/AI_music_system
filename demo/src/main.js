import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const app = createApp(App)
app.use(router) //注册路由
    .use(ElementPlus) //注册element-plus
    .mount('#app')
/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-08-05 14:13:03
 * @LastEditors: Linyer
 * @LastEditTime: 2021-08-05 14:17:49
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 完整引入element-plus
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
// 挂载组件
app.use(ElementPlus, { size: "small" });
// 挂载路由及状态存储
app.use(router).use(store).mount("#app");

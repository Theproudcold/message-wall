import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
// 引入公共样式
import "./assets/styles/commons.scss";
// 引入公共颜色变量
import "./assets/styles/color.css";
// 进入字体图标
import "@/assets/fonts/iconfont.css";
createApp(App).use(router).mount("#app");

import { createApp } from "vue";

import App from "./App.vue";
import { createPinia } from "pinia";
// 数据持久化
import piniaPluginPersist from "pinia-plugin-persist";
import router from "./router";
// 引入公共样式
import "./assets/styles/commons.scss";
// 引入公共颜色变量
import "./assets/styles/color.css";
// 进入字体图标
import "@/assets/fonts/iconfont.css";

const pinia = createPinia();
pinia.use(piniaPluginPersist);
createApp(App).use(pinia).use(router).mount("#app");

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/styles/commons.scss";
import "./assets/styles/color.css";
createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
  history: createWebHistory(),
});
createApp(App).use(router).mount("#app");

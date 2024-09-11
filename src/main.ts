import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import CookieFeed from "./pages/CookieFeed.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/feed/",
      component: CookieFeed,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
});
createApp(App).use(router).mount("#app");

import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/login/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

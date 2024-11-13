import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "@/views/Home2.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/teste",
    name: "home2",
    component: Home2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

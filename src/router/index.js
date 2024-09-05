import { createRouter, createWebHistory } from "vue-router";

import PageHome from "@views/PageHome.vue";

const routes = [{ path: "/", component: PageHome }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

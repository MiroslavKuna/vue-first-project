import { createRouter, createWebHistory } from "vue-router";
import vueLogin from "../views/vueLogin.vue";
import vueRegister from "../views/vueRegister.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: vueLogin,
  },
  {
    path: "/register",
    name: "register",
    component: vueRegister,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

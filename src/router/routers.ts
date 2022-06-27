import { RouteRecordRaw } from "vue-router";

const Routers: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/index/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../components/NotFound/NotFound.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login/Login.vue"),
  },
];

export default Routers;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/matches",
    name: "Matches",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Matches.vue"),
  },
  {
    path: "/deliveries",
    name: "Deliveries",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Deliveries.vue"),
  },
  {
    path: "/teams",
    name: "Teams",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Teams.vue"),
  },
  {
    path: "/players",
    name: "Players",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Players.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import Splash from "../views/Splash.vue";
import Oikos from "../views/Oikos.vue";
import Incubator from "../views/Incubator.vue";
import Laboratory from "../views/Laboratory.vue";
import Antenna from "../views/Antenna.vue";
import Action from "../views/Action.vue";

import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Splash,
  },
  {
    path: "/oikos-centrum",
    name: "Oikos",
    component: Oikos,
  },
  {
    path: "/incubator",
    name: "Incubator",
    component: Incubator,
  },
  {
    path: "/laboratory",
    name: "Laboratory",
    component: Laboratory,
  },
  {
    path: "/antenna",
    name: "Antenna",
    component: Antenna,
  },
  {
    path: "/climate-action-now",
    name: "Action",
    component: Action,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

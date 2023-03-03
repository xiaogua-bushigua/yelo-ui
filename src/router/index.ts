import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/button",
        component: () => import("../components/Button.vue"),
      },
      {
        path: "/echarts",
        component: () => import("../components/Echarts.vue"),
      },
      {
        path: "/swipers",
        component: () => import("../components/Swiper.vue"),
      },
      {
        path: "/textarea",
        component: () => import("../components/Textarea.vue"),
      },
      {
        path: "/modal",
        component: () => import("../components/Modal.vue"),
      },
      {
        path: "/tour",
        component: () => import("../components/Tour.vue")
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

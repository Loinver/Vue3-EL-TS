/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-08-05 14:13:03
 * @LastEditors: Linyer
 * @LastEditTime: 2021-08-05 14:19:22
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index.html",
  },
  {
    path: "/index.html",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/Index/index.vue"),
    meta: {
      auth: false,
      title: "首页",
      keepAlive: true,
    },
  },
  {
    // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path: "/:pathMatch(.*)*",
    name: "404",
    redirect: "/index.html",
  },
];
const modulesFiles = require.context("./modules", true, /\.js$/);
// 自动引入module包
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleRouter = modulesFiles(modulePath);
  modules = modules.concat(moduleRouter.default);
  return modules;
}, []);
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes.concat(modules),
});

export default router;

/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-07-29 10:40:36
 * @LastEditors: Linyer
 * @LastEditTime: 2021-08-05 14:26:22
 */
import { createStore } from "vuex";
import getters from "./getters";

const modulesFiles = require.context("./modules", true, /\.js$/);

// 自动引入module包
const modules = modulesFiles.keys().reduce((modules: any, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules,
  getters,
});

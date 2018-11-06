import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let routes = [
  {
    path: "/",
    redirect: "/home"
  }
];

// 路径解析,自动获取router下所有js的数组拼接
const analysis = resolve => {
  resolve.keys().forEach(key => {
    routes = routes.concat(resolve(key).default);
  });
};

analysis(require.context("@/router/", true, /\.js$/));

export default new Router({
  routes: routes
});

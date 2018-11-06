import Vue from "vue";
import App from "./App.vue";
import router from "@/libs/router.js";
import store from "@/vuex";
import "@/components/components";
import "@/style/reset.css";

import api from "@/libs/api";
import http from "@/libs/http";
Vue.prototype.api = api;
Vue.prototype.http = http;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

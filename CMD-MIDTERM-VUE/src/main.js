import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "./components/Header.vue";

createApp(App).mount("#app");

const routes = [
  // will match everything and put it under `$route.params.pathMatch`
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  { path: "/user-:afterUser(.*)", component: UserGeneric },
];

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + process.env.CI_PROJECT_NAME + "/"
      : "/",
};

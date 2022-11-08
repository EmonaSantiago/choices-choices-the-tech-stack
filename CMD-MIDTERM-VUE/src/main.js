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

this.$router.push({
  name: "NotFound",
  // preserve current path and remove the first char to avoid the target URL starting with `//`
  params: { pathMatch: this.$route.path.substring(1).split("/") },
  // preserve existing query and hash if any
  query: this.$route.query,
  hash: this.$route.hash,
});

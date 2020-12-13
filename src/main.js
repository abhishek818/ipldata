import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ClientTable } from "vue-tables-2";

Vue.config.productionTip = false;
let options = {};
let useVuex = false;
let theme = "bootstrap4";
let template = "default";
Vue.use(ClientTable, options, useVuex, theme, template);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

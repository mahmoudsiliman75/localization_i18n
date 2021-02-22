import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import icons from "v-svg-icons";

Vue.config.productionTip = false;

Vue.component("icon", icons);

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");

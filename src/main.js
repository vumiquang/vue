import Vue from "vue";
import App from "./App.vue";
import "./assets/css/global.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

library.add(faFileCirclePlus, faTrashCan);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

Vue.component("font-awesome-icon", FontAwesomeIcon);

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import the icons you want to use */
import { faB, faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

/* add the icons to the library */
library.add(faShoppingCart);
library.add(faBars);

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.mount("#app");

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewProducts from "../views/NewProducts.vue";
import Women from "../views/Women.vue";
import Men from "../views/Men.vue";
import Accessories from "../views/Accessories.vue";
import MyAccount from "../views/MyAccount.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/newproducts", name: "NewProducts", component: NewProducts },
	{ path: "/women", name: "Women", component: Women },
	{ path: "/men", name: "Men", component: Men },
	{ path: "/accessories", name: "Accessories", component: Accessories },
	{ path: "/myaccount", name: "MyAccount", component: MyAccount },
	{ path: "/cart", name: "Cart", component: Cart },
	{ path: "/checkout", name: "Checkout", component: Checkout },
	{ path: "/www.facebook.com", name: "Facebook" },
	{ path: "/www.instagram.com", name: "Instagram" },
	{ path: "/www.twitter.com", name: "Twitter" },
	{ path: "/www.youtube.com", name: "Youtube" },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;

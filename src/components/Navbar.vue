<template>
	<div class="font-mainFont">
		<div class="flex w-full p-2 text-lg">
			<div class="lg:w-2/3 w-1/2">
				<router-link :to="{ name: 'Home' }"
					><img
						class="max-w-full"
						:src="logoPath"
						alt="logo"
				/></router-link>
			</div>
			<div
				class="lg:w-1/3 flex items-center lg:justify-between w-1/2 justify-end">
				<div class="w-1/2">
					<input
						type="text"
						name="search-input"
						class="w-48 max-w-full border-2 border-black rounded-lg placeholder-black placeholder:text-lg"
						placeholder="Search Products" />
				</div>

				<div class="w-1/4 text-center hidden md:block">
					<router-link :to="{ name: 'Home' }"> My Account</router-link>
				</div>

				<div class="w-1/4 text-center hidden md:block">
					<router-link :to="{ name: 'Home' }">
						<font-awesome-icon :icon="['fas', 'cart-shopping']" />
					</router-link>
				</div>
			</div>
		</div>
		<nav
			class="w-full p-3 flex justify-around bg-color1 text-[#fbeae2] text-lg">
			<router-link
				v-for="(page, index) in navTier1"
				:key="index"
				:to="page.link">
				{{ page.name }}
			</router-link>
		</nav>
	</div>
</template>

<script>
	import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
	import logoPath from "../assets/logo/logo.jpg";
	export default {
		name: "Navbar",
		data() {
			return {
				logoPath: logoPath,
				index: 0,
				navTier1: [
					{
						name: "New Products",
						link: "/newproducts",
						content: "New Products",
					},
					{
						name: "Women's",
						link: "/women",
						content: "Women Products",
					},
					{
						name: "Men's",
						link: "/men",
						content: "Men Products",
					},
					{
						name: "Accessories",
						link: "/accessories",
						content: "Accessories",
					},
				],
				navTier2: [
					{
						name: "Home",
						link: "/",
						content: "Home",
					},
					{
						name: "MyAccount",
						link: "/myaccount",
						content: "My Account",
					},
					{
						name: "Cart",
						link: "/cart",
						content: "Cart",
					},
				],
			};
		},
		methods: {
			// ...
		},
	};
</script>

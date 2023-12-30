<template>
	<div class="font-mainFont">
		<div class="flex w-full p-2 text-lg border-black border-b-2 bg-[#aea89b]">
			<div class="lg:w-2/3 w-1/2">
				<router-link :to="{ name: 'Home' }"
					><img
						class="max-w-full rounded-lg"
						:src="logoPath"
						alt="logo"
				/></router-link>
			</div>
			<div
				class="lg:w-1/3 flex items-center lg:justify-between w-1/2 justify-around">
				<div class="w-1/2">
					<input
						type="text"
						name="search-input"
						class="w-48 max-w-full border-2 border-black rounded-lg placeholder-black placeholder:text-lg"
						placeholder="Search Products" />
				</div>

				<div class="w-1/4 text-center hidden md:block">
					<router-link :to="{ name: 'MyAccount' }"> My Account</router-link>
				</div>

				<div class="w-1/4 text-center hidden md:block">
					<router-link
						:to="{ name: 'Cart' }"
						@click="consoleLog()">
						<font-awesome-icon :icon="['fas', 'cart-shopping']" />
					</router-link>
				</div>
				<div
					class="md:hidden cursor-pointer"
					@click="toggle()">
					<font-awesome-icon :icon="['fas', 'bars']" />
				</div>
			</div>
		</div>
		<nav
			class="w-full md:flex justify-around bg-color1 text-[#fbeae2] text-lg p-1 hidden border-black border-b-2">
			<router-link
				v-for="(page, index) in navTier1"
				:key="index"
				:to="page.link"
				class="hover:bg-[#fbeae2] hover:text-[#775040] w-1/6 text-center p-2"
				v-show="index >= 3">
				{{ page.name }}
				{{ console.log(index) }}
			</router-link>
		</nav>
		<ul
			class="text-center p-1 border-black border-b-2"
			:class="state"
			:display="displayChecker()">
			<router-link
				v-for="(page, index) in navTier1"
				:key="index"
				:to="page.link"
				class="hover:text-[#775040]"
				@click="toggle()"
				><li class="hover:bg-color1 hover:text-white border-black">
					{{ page.name }}
				</li></router-link
			>
			<router-link
				v-for="(page, index) in navTier1"
				:key="index"
				:to="page.link"
				v-if="index >= 3"
				class="hover:text-[#775040]"
				@click="toggle()"
				><li class="hover:bg-color1 hover:text-white border-black">
					{{ page.name }}
				</li></router-link
			>
		</ul>
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
				state: "hidden",
				display: false,
				navTier1: [
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
					{
						name: "New",
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
			};
		},
		methods: {
			consoleLog() {
				console.log(this.index);
			},
			toggle() {
				if (this.state === "hidden" && this.display === false) {
					this.state = "block";
				} else {
					this.state = "hidden";
				}
			},
			displayChecker() {
				window.addEventListener("resize", () => {
					if (window.innerWidth > 768) {
						this.display = true;
						this.toggle();
					} else {
						this.display = false;
					}
				});
			},
		},
	};
</script>

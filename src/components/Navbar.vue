<template>
	<nav class="w-full bg-black text-white p-4 flex justify-around">
		<router-link
			v-for="(page, index) in pages"
			:key="index"
			:to="page.link">
			{{ page.content }}
		</router-link>
	</nav>
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {
				index: 0,
				pages: [
					{
						name: "Home",
						link: "/",
						content: "Home",
					},
					{
						name: "About",
						link: "/about",
						content: "About",
					},
					{
						name: "Contact",
						link: "/contact",
						content: "Contact",
					},
				],
			};
		},
		methods: {
			// ...
		},
	};
</script>

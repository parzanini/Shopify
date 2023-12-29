<template>
	<div class="flex w-full">
		<div class="w-1/2 p-3 flex justify-center">
			<img
				class="max-w-full"
				:src="heroImg"
				alt="Hero image" />
		</div>
		<div class="w-1/2 flex flex-wrap p-3">
			<div class="w-full p-3">
				<h1 class="">Get the Latest Look!</h1>
				<button class="btn p-1 w-32 m-2">Browse Trends</button>
			</div>
			<div class="w-full flex">
				<div class="w-1/2 flex justify-center">
					<img
						:src="menImg"
						class="m-w-full p-1" />
				</div>
				<div class="w-1/2 flex justify-center">
					<img
						:src="womenImg"
						class="m-w-full p-1" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import heroImg from "../assets/hero_image.jpeg";
	import menImg from "../assets/products/mens.jpg";
	import womenImg from "../assets/products/womens.jpg";
	export default {
		name: "Home",
		data() {
			return {
				heroImg: heroImg,
				menImg: menImg,
				womenImg: womenImg,
			};
		},
		components: {},
	};
</script>

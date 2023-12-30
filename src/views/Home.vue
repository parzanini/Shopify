<template>
	<div class="flex w-full">
		<Swiper
			:modules="[Autoplay, Pagination]"
			:autoplay="{ delay: 7000, disableOnInteraction: true }"
			:grab-cursor="true"
			:loop="true"
			:pagination="{ clickable: true }"
			class="w-1/2 my-auto">
			<swiper-slide
				v-for="img in imgs"
				:key="img.id"
				class="w-full p-4 relative">
				<img
					:src="img.image"
					class="m-w-full" />
				<p class="absolute centered text-white bg-black opacity-70 text-2xl">
					{{ img.description }}
				</p>
			</swiper-slide>
		</Swiper>

		<div class="w-1/2 flex flex-wrap p-1">
			<div class="w-full p-1">
				<h1 class="text-4xl p-2">Get the Latest Look!</h1>
				<router-link :to="{ name: 'NewProducts' }">
					<button class="btn p-2 w-40 m-2">Browse Trends</button>
				</router-link>
			</div>
			<div class="w-full flex">
				<div class="w-1/2 flex flex-col justify-center">
					<img
						:src="menImg"
						class="m-w-full p-1" />
					<p class="text-center bg-color1 text-[#fbeae2] font-bold mx-1">
						Men's
					</p>
				</div>
				<div class="w-1/2 flex justify-center flex-col">
					<img
						:src="womenImg"
						class="m-w-full p-1" />
					<p class="text-center bg-color1 text-[#fbeae2] font-bold mx-1">
						Women's
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import heroImg from "../assets/hero_image.jpeg";
	import menImg from "../assets/products/mens.jpg";
	import womenImg from "../assets/products/womens.jpg";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Autoplay, Pagination } from "swiper/modules";

	//import Swiper styles
	import "swiper/css";
	import "swiper/css/pagination";

	export default {
		name: "Home",
		data() {
			return {
				heroImg: heroImg,
				menImg: menImg,
				womenImg: womenImg,
				imgs: [
					{
						id: 1,
						image: heroImg,
						description: "hero image1",
					},
					{
						id: 2,
						image: heroImg,
						description: "hero image2",
					},
					{
						id: 3,
						image: heroImg,
						description: "hero image3",
					},
				],
			};
		},
		components: { Swiper, SwiperSlide },
		setup() {
			return {
				Autoplay,
				Pagination,
			};
		},
	};
</script>

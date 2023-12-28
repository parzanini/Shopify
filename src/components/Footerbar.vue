<template>
	<footer class="flex flex-wrap bg-color2 border border-black w-full">
		<form
			action="contact.html"
			class="w-full flex flex-wrap md:w-1/2 p-2">
			<legend class="w-full text-center">
				<h3 class="font-bold">Sign Up to Our Newsletter</h3>
			</legend>
			<div class="w-full my-auto md:w-2/3 flex justify-center">
				<label
					for="email"
					class="p-1"
					>Email:</label
				>
				<input
					class="rounded-lg border border-black p-1 mr-1 w-96"
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email..."
					required />
			</div>
			<div class="w-full flex justify-center md:justify-start md:w-1/3">
				<button
					type="submit"
					class="btn p-1 w-32 m-2">
					Subscribe
				</button>
			</div>
		</form>

		<div class="w-full md:w-1/2 flex justify-around items-center p-1">
			<div>
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer">
					<img
						:src="icon1"
						alt="Facebook logo" />
				</a>
			</div>
			<div>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer">
					<img
						:src="icon2"
						alt="Instagram logo" />
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer">
					<img
						:src="icon3"
						alt="Twitter logo" />
				</a>
			</div>
			<div>
				<a
					href="https://www.youtube.com"
					target="_blank"
					rel="noopener noreferrer">
					<img
						:src="icon4"
						alt="YouTube logo" />
				</a>
			</div>
		</div>
		<div class="w-full text-center bg-[#857e7f] text-[#2e1913] p-1">
			<p>© 2023 All rights reserved</p>
		</div>
	</footer>
</template>

<script>
	import icon1 from "../assets/facebook.png";
	import icon2 from "../assets/instagram.png";
	import icon3 from "../assets/twitter.png";
	import icon4 from "../assets/youtube.png";

	export default {
		name: "Footerbar",
		data() {
			return {
				icon1: icon1,
				icon2: icon2,
				icon3: icon3,
				icon4: icon4,
			};
		},
	};
</script>

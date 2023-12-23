<template>
	<div id="app">
		<Navbar />
		<router-view />
		<Footerbar />
	</div>
</template>

<script>
	import Navbar from "./components/Navbar.vue";
	import Footerbar from "./components/Footerbar.vue";

	export default {
		name: "App",
		components: { Navbar, Footerbar },
	};
</script>

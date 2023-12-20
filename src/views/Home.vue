<template>
	<Navbar />
	<h1>This is the home page</h1>
	<router-view />
</template>
<script>
	import Navbar from "../components/Navbar.vue";
	export default {
		name: "Home",
		components: {
			Navbar,
		},
	};
</script>

<template>
	<Navbar />
	<h1>This is About page</h1>
	<router-view />
</template>
<script>
	import Navbar from "../components/Navbar.vue";
	export default {
		name: "About",
		components: {
			Navbar,
		},
	};
</script>

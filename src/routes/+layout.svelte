<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Hayden Crane</title>
</svelte:head>

{@render children()}

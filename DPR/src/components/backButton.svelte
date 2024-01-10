<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from './button.svelte';

	function go_back() {
		console.log(window.history);
		if (window.history.length > 1) {
			window.history.back();
		} else {
			goto('/');
		}
	}
</script>

<button on:click={go_back}>Go Back</button>

<script lang="ts">
	import { goto } from '$app/navigation';

	function go_back() {
		if (window.history.length > 1) {
			window.history.back();
		} else {
			goto('/');
		}
	}
</script>

<button on:click={go_back}>Go Back</button>

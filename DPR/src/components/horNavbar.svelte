<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let myCalendars: boolean;
	const dispatch = createEventDispatcher();
</script>

<ul class="menu menu-horizontal bg-base-200">
	<button on:click={() => dispatch('change', myCalendars === true)}>
		<li>Mes calendriers</li>
	</button>
	<button on:click={() => dispatch('change', myCalendars === false)}>
		<li>Tous les calendriers</li>
	</button>
</ul>

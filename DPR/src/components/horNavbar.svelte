<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let item: 'Mes calendriers';
	const dispatch = createEventDispatcher();
	const navbarItems = ['Mes calendriers', 'Tous les calendriers'];
</script>

<div class="w-full">
	<ul class="menu menu-horizontal bg-base-200 w-full flex justify-evenly">
		{#each navbarItems as item}
			<li>
				<button on:click={() => dispatch('change', item)}>
					{item}
				</button>
			</li>
		{/each}
	</ul>
</div>

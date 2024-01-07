<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import clsx from 'clsx';
	export let item: 'Mes calendriers';
	const dispatch = createEventDispatcher();
	let selected = 'Mes calendriers';
	const navbarItems = ['Mes calendriers', 'Tous les calendriers'];

	const handleClick = (event) => {
		dispatch('change', event.target.textContent);
		selected = event.target.textContent;
	};
</script>

<div class="w-full">
	<ul class="menu menu-horizontal bg-base-200 w-full flex justify-evenly">
		{#each navbarItems as item}
			<li>
				<button on:click={(item) => handleClick(item)}>
					<p class={selected === item ? 'font-extrabold' : null}>{item}</p>
				</button>
			</li>
		{/each}
	</ul>
</div>

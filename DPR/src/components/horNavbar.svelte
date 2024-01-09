<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let item;
	const dispatch = createEventDispatcher();
	let selected = item;
	const navbarItems = ['Mes calendriers', 'Tous les calendriers'];

	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLButtonElement;
		dispatch('change', target?.textContent);
		selected = target?.textContent;
	};
</script>

<div class="w-full">
	<ul class="menu menu-horizontal bg-base-200 w-full flex justify-evenly">
		{#each navbarItems as singleItem}
			<li>
				<button on:click={(singleItem) => handleClick(singleItem)}>
					<p class={selected === singleItem ? 'font-extrabold' : null}>{singleItem}</p>
				</button>
			</li>
		{/each}
	</ul>
</div>

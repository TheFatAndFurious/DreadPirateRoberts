<script lang="ts">
	import ModalEvents from './modalEvents.svelte';

	export let title: string = 'Placeholder';
	export let descriptif: string = 'A venir';
	export let idCalendar: number;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title capitalize">{title}</h2>
		<p class="text-left">{descriptif}</p>
	</div>
</div>

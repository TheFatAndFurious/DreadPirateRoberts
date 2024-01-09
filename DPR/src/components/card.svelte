<script lang="ts">
	import ModalEvents from './modalEvents.svelte';

	export let title: string = 'Placeholder';
	export let descriptif: string = 'A venir';
	export let idCalendar: number;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{descriptif}</p>
	</div>
</div>

<script lang="ts">
	import { supabase } from '$lib/supabase';
	import SingleEventCard from './singleEventCard.svelte';
	export let idCalendar: number;
	let isLoading = false;
	let modal;
	let events = [];

	async function getEventsForACalendar(id: number) {
		const { data, error } = await supabase.from('events').select('*').eq('id_calendar', id);
		if (error) {
			console.error('Error fetching events:', error);
			return [];
		}
		return data;
	}

	$: if (idCalendar) {
		isLoading = true;
		getEventsForACalendar(idCalendar)
			.then((fetchedEvents) => {
				events = fetchedEvents;
			})
			.finally(() => {
				isLoading = false;
			});
	}

	export function openModal() {
		modal?.showModal();
	}
</script>

<dialog id="my_modal_3" class="modal" bind:this={modal}>
	<div class="modal-box w-3/4">
		<h3 class="font-bold text-lg">Evenements</h3>
		{#if isLoading === true}
			<span class="loading loading-spinner text-accent"></span>
		{:else if events.length > 0}
			{#each events as event}
				<SingleEventCard
					date={event.date}
					title={event.title}
					time={event.time}
					eventID={event.id}
				/>
				<!-- Display the title of each event -->
			{/each}
		{:else}
			<div>No events</div>
		{/if}
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

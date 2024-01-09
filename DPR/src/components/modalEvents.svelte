<script lang="ts">
	import { supabase } from '$lib/supabase';
	export let idCalendar: number;
	let isLoading = false;
	let modal;
	let events: [] = [];

	async function getEventsForACalendar(id: number) {
		const { data, error } = await supabase.from('events').select('*').eq('id_calendar', id);
		if (error) {
			console.error('Error fetching events:', error);
			return [];
		}
		return data;
	}

	export function openModal() {
		isLoading = true;
		getEventsForACalendar(idCalendar)
			.then((fetchedEvents) => {
				events = fetchedEvents;
				modal?.showModal();
			})
			.finally(() => {
				isLoading = false;
			});
	}
</script>

<dialog id="my_modal_3" class="modal" bind:this={modal}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Evenements</h3>
		{#if events.length > 0}
			{#each events as event}
				<p>{event.title}</p>
				<!-- Display the title of each event -->
			{/each}
		{:else}
			<p>No events</p>
		{/if}
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

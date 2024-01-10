<script lang="ts">
	import SingleEventCard from '../../../components/singleEventCard.svelte';
	import type { PageData } from './$types';
	import { supabase } from '$lib/supabase';
	import BackButton from '../../../components/backButton.svelte';

	export let data: PageData;
	const events = data.calendar;
	let isLoading = false;

	// TODO: find another way to pass the calendar ID as trying to add an empty calendar with no event will cause an error
	async function handleClick() {
		isLoading = true;
		try {
			const reponse = await supabase
				.from('user_calendars')
				.insert({ user_calendar: events[0].id_calendar, id_user: data.session.user.id });
			console.log('🚀 ~ handleClick ~ reponse:', reponse);
		} catch (error) {
			console.error(error);
		}
		isLoading = false;
	}
</script>

<div class="h-full">
	<div class="relative w-screen mx-auto mb-20">
		<BackButton />

		{#each events as oneEvent}
			<SingleEventCard
				eventID={oneEvent.id}
				title={oneEvent.title}
				date={oneEvent.date}
				time={oneEvent.time}
			/>
		{/each}
		<button
			on:click={handleClick}
			class="w-1/2 fixed bottom-20 right-2 bg-slate-600 p-3 rounded-full font-bold"
			>{#if isLoading}
				<p>Loading...</p>
			{:else}
				<p>S'abonner a ce calendrier</p>
			{/if}</button
		>
	</div>
</div>

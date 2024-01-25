<script lang="ts">
	import type { PageData } from './$types';
	import SingleEventCard from '../components/singleEventCard.svelte';
	import type { Database, Tables } from '../../DatabaseDefinitions';
	import { format } from 'date-fns';
	import { frCA } from 'date-fns/locale';

	export let data: PageData;

	const user_events: Tables<'events'>[] = data.events?.data;
	const eventsByDates = user_events.reduce((acc, event) => {
		if (!acc[event.date]) {
			acc[event.date] = [];
		}
		acc[event.date].push(event);

		return acc;
	}, {});
	const eventsByDatesToArray = Object.values(eventsByDates);
</script>

{#if data.session}
	<h1>Hello {data.session.user.email}</h1>
{/if}
{#if user_events.length > 0}
	{#each eventsByDatesToArray as eventsByDay}
		<div class="bg-yellow-400 p-1 m-4 text-black">
			<p>{format(eventsByDay[0].date, 'eeee dd MMMM yyyy', { locale: frCA })}</p>
		</div>
		{#each eventsByDay as event}
			<SingleEventCard
				title={event.title}
				date={event.date}
				eventID={event.id}
				idUser={data.session?.user.id}
				calendarID={event.id_calendar}
				time={event.time}
			/>
		{/each}
	{/each}
{:else}
	<p>Aucun evenement a venir</p>
{/if}

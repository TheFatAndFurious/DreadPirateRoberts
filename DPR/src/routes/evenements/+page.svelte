<script lang="ts">
	import SingleEventCard from '../../components/singleEventCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('🚀 ~ data:', data);
	const upcomingEvents = data.events;
	const calendars = data.calendars;

	const upcomingEventsWithCalendarName = upcomingEvents?.map((event) => {
		return {
			...event,
			calendar: calendars?.find((calendar) => calendar.id === event.id_calendar)
		};
	});

	console.log('data', data);
</script>

<h1>Evenements a venir</h1>

<div class="flex flex-col w-full px-4">
	{#each upcomingEventsWithCalendarName as event}
		<SingleEventCard
			calendarName={event.calendar.name}
			calendarID={event.id_calendar}
			eventID={event.id}
			title={event.title}
			date={event.date}
			time={event.time}
			idUser={data.session.user.id}
		/>
	{/each}
</div>

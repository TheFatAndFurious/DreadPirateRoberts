<script lang="ts">
	import SingleEventCard from '../../components/singleEventCard.svelte';
	import type { PageData } from './$types';

	//TODO: group events by date like the homepage
	//TODO: create a filter to allow to pick events for a chosen day
	//TODO: consider creating a filter to allow displaying all events whether the user registered to the calendar or not

	export let data: PageData;
	const upcomingEvents = data.events;
	const calendars = data.calendars;

	const upcomingEventsWithCalendarName = upcomingEvents?.map((event) => {
		return {
			...event,
			calendar: calendars?.find((calendar) => calendar.id === event.id_calendar)
		};
	});
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

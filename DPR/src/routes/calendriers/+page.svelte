<script lang="ts">
	import type { PageData } from './$types';
	import HorNavbar from '../../components/horNavbar.svelte';
	import Card from '../../components/card.svelte';
	import type { Calendar, UserCalendar } from './types';
	import ModalEvents from '../../components/modalEvents.svelte';
	export let data: PageData;
	let item: string = 'Tous les calendriers';
	data.session ? item === 'Mes calendriers' : item === 'Tous les calendriers';
	let selected: number = 0;
	let allCalendars: Calendar[] = data.calendars || [];
	let modalEvents;

	// Handling item value to cycle through the navbar
	function handleCalendarChange(newVal: CustomEvent<string>) {
		item = newVal.detail;
	}

	// A REFACTO
	let userSubscribedCalendars: Calendar[] =
		data.userCalendars
			?.map((userCalendar: UserCalendar) => {
				return data.calendars?.find((calendar) => calendar.id === userCalendar.user_calendar);
			})
			.filter((calendar): calendar is Calendar => calendar !== undefined) || [];

	let unSuscribedCalendars: Calendar[] = allCalendars.filter(
		(calendar) => !userSubscribedCalendars.includes(calendar)
	);
</script>

<HorNavbar on:change={handleCalendarChange} {item} />

{#if item === 'Mes calendriers'}
	{#each userSubscribedCalendars as calendar}
		<a href={`/calendriers/${calendar.id}`}>
			<Card title={calendar.name} descriptif={calendar.descriptif} idCalendar={calendar.id} />
		</a>
	{/each}
{:else}
	{#each unSuscribedCalendars as aCelendar}
		<a href={`/calendriers/${aCelendar.id}`}>
			<Card title={aCelendar.name} descriptif={aCelendar.descriptif} idCalendar={aCelendar.id} />
		</a>
	{/each}
{/if}
<ModalEvents idCalendar={selected} bind:this={modalEvents} />

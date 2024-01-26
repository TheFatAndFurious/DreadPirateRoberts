<script lang="ts">
	import type { PageData } from './$types';
	import HorNavbar from '../../components/HorNavbar.svelte';
	import Card from '../../components/Card.svelte';
	import type { Database, Tables } from '../../../DatabaseDefinitions';
	import ModalEvents from '../../components/ModalEvents.svelte';
	export let data: PageData;
	let item: string = 'Tous les calendriers';
	data.session ? item === 'Mes calendriers' : item === 'Tous les calendriers';
	let selected: number = 0;
	let allCalendars: Tables<'calendar'>[] = data.calendars || [];
	let modalEvents;

	// Handling item value to cycle through the navbar
	function handleCalendarChange(newVal: CustomEvent<string>) {
		item = newVal.detail;
	}

	// A REFACTO
	let userSubscribedCalendars: Tables<'calendar'>[] =
		data.userCalendars
			?.map((userCalendar: Tables<'user_calendars'>) => {
				return data.calendars?.find((calendar) => calendar.id === userCalendar.user_calendar);
			})
			.filter((calendar): calendar is Tables<'calendar'> => calendar !== undefined) || [];

	let unSuscribedCalendars: Tables<'calendar'>[] = allCalendars.filter(
		(calendar) => !userSubscribedCalendars.includes(calendar)
	);
</script>

<HorNavbar on:change={handleCalendarChange} {item} />

{#if item === 'Mes calendriers'}
	{#each userSubscribedCalendars as calendar}
		<a href={`/calendriers/${calendar.id}`}>
			<Card title={calendar.name} descriptif={calendar.descriptif} />
		</a>
	{/each}
{:else}
	{#each unSuscribedCalendars as aCelendar}
		<a href={`/calendriers/${aCelendar.id}`}>
			<Card title={aCelendar.name} descriptif={aCelendar.descriptif} />
		</a>
	{/each}
{/if}
<ModalEvents idCalendar={selected} bind:this={modalEvents} />

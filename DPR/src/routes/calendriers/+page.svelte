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

	function openEventsModal(calendarId: number) {
		selected = calendarId;

		modalEvents.openModal();
	}

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
</script>

<HorNavbar on:change={handleCalendarChange} {item} />

{#if item === 'Mes calendriers'}
	{#each userSubscribedCalendars as calendar}
		<button on:click={() => openEventsModal(calendar.id)}>
			<Card title={calendar.name} descriptif={calendar.descriptif} idCalendar={calendar.id} />
		</button>
	{/each}
{:else}
	{#each allCalendars as aCelendar}
		<button on:click={() => openEventsModal(aCelendar.id)}>
			<Card title={aCelendar.name} descriptif={aCelendar.descriptif} idCalendar={aCelendar.id} />
		</button>
	{/each}
{/if}
<ModalEvents idCalendar={selected} bind:this={modalEvents} />

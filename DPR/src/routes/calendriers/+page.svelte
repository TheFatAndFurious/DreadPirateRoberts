<script lang="ts">
	import type { PageData } from './$types';
	import HorNavbar from '../../components/horNavbar.svelte';
	import Card from '../../components/card.svelte';
	export let data: PageData;
	let item: string = 'Mes calendriers';
	function handleCalendarChange(newVal) {
		item = newVal;
	}

	const userSubscribedCalendars = data.userCalendars?.map((calendar) => {
		return data.calendars?.find((item) => item.id === calendar.user_calendar);
	});

	$: console.log(item.detail);
</script>

<HorNavbar myCalendars on:change={handleCalendarChange} />

{#if item.detail === 'Mes calendriers'}
	{#each userSubscribedCalendars as calendar}
		<Card title={calendar.name} descriptif={calendar.descriptif} />
	{/each}
{:else}
	{#each data.calendars as aCelendar}
		<Card title={aCelendar.name} descriptif={aCelendar.descriptif} />
	{/each}
{/if}

<script lang="ts">
	import type { PageData } from './$types';
	import HorNavbar from '../../components/horNavbar.svelte';
	import Card from '../../components/card.svelte';
	export let data: PageData;
	let item: string = 'Mes calendriers';
	function handleCalendarChange(newVal) {
		item = newVal;
	}
	console.log(data.userCalendars);
	console.log(data.calendars);

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

<!-- {#each data.data as calendar}
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title capitalize">{calendar.name}</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Voir les evenements</button>
			</div>
		</div>
	</div>
{/each} -->

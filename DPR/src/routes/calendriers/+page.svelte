<script lang="ts">
	import type { PageData } from './$types';
	import { userProfile } from '../../stores/userStore';
	import HorNavbar from '../../components/horNavbar.svelte';
	export let data: PageData;
	let myCalendars: boolean = true;
	function handleCalendarChange(newVal) {
		myCalendars = newVal;
	}
	console.log(data.userCalendars);
	console.log(data.calendars);

	const userSubscribedCalendars = data.userCalendars?.map((calendar) => {
		return data.calendars?.find((item) => item.id === calendar.user_calendar);
	});
	console.log(
		'🚀 ~ file: +page.svelte:16 ~ userSubscribedCalendars ~ userSubscribedCalendars:',
		userSubscribedCalendars
	);
</script>

<HorNavbar myCalendars on:change={handleCalendarChange} />

{#if myCalendars.detail === true}
	{#each userSubscribedCalendars as calendar}
		<p>{calendar.name}</p>
	{/each}
{:else}
	{#each data.calendars as aCelendar}
		<p>{aCelendar.name}</p>
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

<script lang="ts">
	import type { PageData } from './$types';
	import { userProfile } from '../stores/userStore';
	import  SingleEventCard  from '../components/singleEventCard.svelte'

	$: console.log("userProfile is: ", userProfile)
	export let data: PageData;
	console.log("=>(+page.svelte:5) data", data);
	const user_events = data.events?.data
</script>
{#if data.session}
		<h1>Hello {data.session.user.email}</h1>
{/if}
{#if user_events.length > 0}
{#each user_events as event}
	<div><p>{event.date}</p></div>
<SingleEventCard title={event.title} date={event.date} eventID={event.id} idUser={data.session?.user.id} calendarID={event.id_calendar} time={event.time} />
{/each }
	{:else }
	<p>Aucun evenement a venir</p>
	{/if}


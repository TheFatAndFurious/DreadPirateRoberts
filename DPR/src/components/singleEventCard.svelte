<script lang="ts">
	import ModalSingleEvent from './modalSingleEvent.svelte';
	import { page } from '$app/stores';

	export let title: string = 'Placeholder';
	export let date: string = 'Placeholder';
	export let time: string = 'Placeholder';
	export let eventID: string;
	export let calendarName: string;
	export let calendarID: string;
	console.log($page.route.id);
</script>

<div class="card bg-primary text-primary-content m-2">
	<div class="card-body p-2 h-48">
		{#if $page.route.id.startsWith('/evenements')}
			<a href={`/calendriers/${calendarID}`}>
				<h2 class="text-center capitalize">{calendarName}</h2>
			</a>
		{/if}
		<p class="capitalize font-bold text-lg">{title}</p>
		<p>Date: {date}</p>
		{#if time}
			<p>Heure: {time}</p>
		{/if}
		<ModalSingleEvent {eventID} {title} {date} {time} description={'random blah blah'} />
	</div>
</div>

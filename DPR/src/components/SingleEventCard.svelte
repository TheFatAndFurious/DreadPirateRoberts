<script lang="ts">
	import ModalSingleEvent from './ModalSingleEvent.svelte';
	import { page } from '$app/stores';
	import { format } from 'date-fns';
	import { frCA } from 'date-fns/locale';

	export let title: string = 'Placeholder';
	export let date: string = 'Placeholder';
	export let time: string | null = 'Placeholder';
	export let eventID: number;
	export let calendarName: string;
	export let calendarID: number;
	export let idUser: string | undefined;
</script>

<div class="card bg-primary text-primary-content m-2">
	<div class="card-body p-2 h-48">
		{#if $page.route?.id && $page.route.id.startsWith('/evenements')}
			<a href={`/calendriers/${calendarID}`}>
				<h2 class="text-center capitalize">{calendarName}</h2>
			</a>
		{/if}
		<p class="capitalize font-bold text-lg">{title}</p>
		<p class="capitalize">
			<span class="font-bold">Date</span>: {format(date, 'eeee dd MMMM yyyy', { locale: frCA })}
		</p>
		{#if time}
			<p><span class="font-bold">Heure</span>: {time}</p>
		{/if}
		<ModalSingleEvent {eventID} {title} {date} {time} description={'random blah blah'} {idUser} />
	</div>
</div>

<script lang="ts">
	import { supabase } from '$lib/supabase';
	import Button from './button.svelte';
	export let title: String;
	export let description: String;
	export let date: string;
	export let time: String;
	export let eventID: String;
	export let idUser: String;

	async function handleClick() {
		try {
			const response = await supabase
				.from('user_events')
				.insert({ id_user: idUser, id_event: eventID });
		} catch (error) {
			console.error(error);
		}
	}
</script>



<button class="btn" on:click={() => document.getElementById(`modal_${eventID}`).showModal()}
	>Voir evenement</button
>
<dialog id={`modal_${eventID}`} class="modal">
	<div class="modal-box bg-slate-100">
		<h3 class="font-bold text-lg capitalize pb-2">{title}</h3>
		<div class="flex flex-col gap-y-2">
			<div class="flex flex-col">
				<p class="font-bold">Il se passe quoi exactement ?</p>
				<p>{description}</p>
			</div>
			<div>
				<p class="font-bold">Et c'est quand ?</p>
				<p>{date}</p>
			</div>
			<div>
				<p class="font-bold">A quelle heure?</p>
				{#if time !== null}
					<p>{time}</p>
				{:else}
					<p>Pas d'horaire</p>
				{/if}
			</div>
		</div>
		<div class="mx-auto flex justify-center p-2">
			<Button on:click={handleClick}>Enregistrer l'evenement</Button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<script lang="ts">
	import Button from './button.svelte';
	import Input from './input.svelte';
	import { supabase } from '$lib/supabase';
	import { writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { userProfile } from '../stores/userStore';

	let email: string = '';
	let password: string = '';
	let modal;

	function closeModal() {
		modal.close();
	}

	const handleLogin = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		supabase.functions.setAuth(data.session?.access_token);
		userProfile.set(data);
		closeModal();
		goto('/calendriers');
	};
</script>

<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">Se connecter</button>
<dialog bind:this={modal} id="my_modal_2" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Hello!</h3>
		<form on:submit|preventDefault={handleLogin} class="flex flex-col gap-y-8">
			<div class="flex flex-col gap-y-2">
				<label for="email">Email</label>
				<Input bind:value={email} />
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="password">Mot de passe</label>
				<Input type="password" bind:value={password} />
			</div>
			<Button type="submit">Se connecter</Button>
		</form>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

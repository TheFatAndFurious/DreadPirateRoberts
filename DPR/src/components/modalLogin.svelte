<script lang="ts">
	import Button from './button.svelte';
	import Input from './input.svelte';
	import { supabase } from '$lib/supabase';
	import { userProfile } from '../stores';

	let email: string = '';
	let password: string = '';

	const handleLogin = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		console.log('🚀 ~ file: modalLogin.svelte:11 ~ handleLogin ~ data:', data);
		// userProfile.set(data);
		// console.log($userProfile);
	};
</script>

<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">Se connecter</button>
<dialog id="my_modal_2" class="modal">
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

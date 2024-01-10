<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import ModalLogin from '../components/modalLogin.svelte';
	import { userProfile } from '../stores/userStore';
	console.log(data.testRefetch);
</script>

{#if $userProfile === null}
	<ModalLogin />
{/if}
<Navbar />
<slot />

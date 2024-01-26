<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import ModalLogin from '../components/ModalLogin.svelte';
	import { userProfile } from '../stores/userStore';
</script>

{#if $userProfile === null}
	<ModalLogin />
{/if}
<Navbar />
<slot />

<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import ModalLogin from '../components/modalLogin.svelte';
</script>

<ModalLogin />
<Navbar />
<slot />

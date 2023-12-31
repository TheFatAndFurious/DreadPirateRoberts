<script lang="ts">
	import type { PageData } from './$types';
	import { userProfile } from '../../stores/userStore';
	export let data: PageData;
	console.log(data);
	$: console.log($userProfile);
</script>

<select class="select w-full max-w-xs">
	<option disabled selected>Choisir une categorie</option>
	<option>Homer</option>
	<option>Marge</option>
	<option>Bart</option>
	<option>Lisa</option>
	<option>Maggie</option>
</select>

<p>user profile is</p>
<pre>{JSON.stringify($userProfile, null, 2)}</pre>

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

<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<select class="select w-full max-w-xs">
	<option disabled selected>Choisir une categorie</option>
	<option>Homer</option>
	<option>Marge</option>
	<option>Bart</option>
	<option>Lisa</option>
	<option>Maggie</option>
</select>

{#each data.data as calendar}
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title capitalize">{calendar.name}</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Voir les evenements</button>
			</div>
		</div>
	</div>
{/each}

<script lang="ts">
	export let title: string = 'Placeholder';
	export let descriptif: string = 'A venir';
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{descriptif}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Dates</button>
		</div>
	</div>
</div>

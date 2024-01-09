<script lang="ts">
	export let title: string = 'Placeholder';
	export let date: string = 'Placeholder';
	export let time: string = 'Placeholder';
</script>

<div class="card w-80 bg-primary text-primary-content mt-2">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{date}</p>
		{#if time}
			<p>{time}</p>
		{/if}
	</div>
</div>

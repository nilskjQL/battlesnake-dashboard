<script>
	export let team;
</script>

<div class='flex p-4 text-white justify-between items-middle h-24 rounded-md my-2 gap-2' style='background-color: {team.colour.hex}'>
	{#if team.logo}
		<img src='{team.logo.responsiveImage.src}' class='h-16 w-16 object-cover' />
		{:else }
		<div class='h-16 w-16 grid place-items-center'>🐍</div>
	{/if}
	<span class='my-auto flex-1'><a href='{team.url}' class='text-white text-xl no-underline'>{team.name}</a></span>
	<span class='my-auto text-white text-xl font-bold'>{team.score}</span>
</div>

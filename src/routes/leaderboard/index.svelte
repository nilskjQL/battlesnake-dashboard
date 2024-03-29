<script>
	import { subscribeToQuery } from 'datocms-listen';
	import { onDestroy, onMount } from 'svelte';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { getGqlString } from '$lib/graphql/dato';
	import { fetchAllTeamsDashboard } from '$lib/graphql/queries';
	import TeamCard from '$lib/components/TeamCard.svelte';
	import { quintOut } from 'svelte/easing';

	let subscription = {
		data: undefined
	};

	let unsubscribe;
	onMount(async () => {
		unsubscribe = await subscribeToQuery({
			query: getGqlString(fetchAllTeamsDashboard),
			token: import.meta.env.VITE_DATO_READ_TOKEN,
			onUpdate: (update) => {
				subscription.data = update.response.data;
				console.log(subscription.data);
			},
			onStatusChange: (status) => {
				console.log(status);
			},
			onChannelError: (error) => {
				console.error(error);
			}
		});
	});
	onDestroy(() => unsubscribe?.());

	$: if (subscription.data) {
		//show highest score on top
		subscription.data?.allTeams.sort((a, b) => b.score - a.score);
		console.log(subscription);
	}

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

</script>

<main class='flex flex-col md:flex-row w-full justify-center gap-x-8'>
	<aside class='w-full md:max-w-xl mx-auto md:px-0 px-6 md:flex-1'>
		<h1 class='py-8 ml-4 text-center text-white text-2xl'>QL Battlesnake Leaderboard 🐍</h1>
		{#if subscription.data}
			{#each subscription.data.allTeams as team (team.id)}
				<div in:receive|local='{{key: team.name}}'
						 out:send|local='{{key: team.name}}'
						 animate:flip='{{duration: 400}}'>
					<TeamCard {team} />
				</div>
			{/each}
		{/if}

	</aside>
	<aside class='text-white md:flex-1 max-w-2xl px-8'>
		<h1 class='py-8 ml-4 text-center text-white text-2xl'>Previous round {subscription.data?.dashboard?.round}</h1>
		<div class='grid place-items-center'>
			Live Replay
			<!--<img src='../../../static/giftest.gif' />-->
			<img src={subscription.data?.dashboard?.playback?.url} />
		</div>
		<h2 class='pt-8 text-2xl'>Round Results</h2>
		<dl>
			<dt>Winner 🏆</dt>
			<dd>{subscription.data?.dashboard?.winner?.name}</dd>
			<dt>Runner up 🥈</dt>
			<dd>{subscription.data?.dashboard?.secondPlace?.name}</dd>
			<dt>Third place 🥉</dt>
			<dd>{subscription.data?.dashboard?.thirdPlace?.name}</dd>
			<dt>Sympathy points 😂</dt>
			<dd>{subscription.data?.dashboard?.sympathy?.name}</dd>
		</dl>

		<h3 class='pt-12 text-2xl'>Announcement 📣</h3>
		<p class='pt-4 pb-20'>{subscription.data?.dashboard?.info}</p>
	</aside>
</main>
<a class='p-8 pb-20' href='/'> {"<---"} Rules and instructions</a>


<style>
	dl {
		@apply grid text-xl gap-6 pt-4;

		grid-template-columns: max-content auto;
	}

	dt {
		@apply text-xl;
		grid-column-start: 1;
	}

	dd {
		@apply text-xl;
		grid-column-start: 2;
	}

</style>

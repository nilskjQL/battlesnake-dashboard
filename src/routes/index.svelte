<main class='text-white p-8 max-w-xl mx-auto mt-8'>
	<h1>Queenslab Battlesnake night</h1>

	<p>
		Welcome to the epic game of battlesnake at Queenslab! This is a multiplayer snake arena game where last standing wins.
	</p>

	<p>
		Each team build and deploy a web server that implements the <a href='https://docs.battlesnake.com/references/api'>Battlesnake API</a>. When a game is created, the game engine will make HTTP requests to your Battlesnake server, sending game board information and asking for your next move. Your Battlesnake's behavior is determined by how you program it to respond to these requests.
		There will be several battle rounds so you can iterate and perfect your team strategy!
	</p>
	<br />
	<br />
	<br />
	<h3>Instructions</h3>
	<ol class='list-decimal'>
		<li>Join the communications slack workspace QL-Battlesnake <a href='https://join.slack.com/t/queenslab-workspace/shared_invite/zt-zae8ifdx-RAYHCuoZgkKUZIOR88u0eg'>Slack invite</a>. This slack will be used for communicating with the Queenslab crew but you can also use it for team internal communications and strategy.</li>
		<li>Pick a profile image and a good unique team name and post that in your slack team channel.</li>
		<li>Setup a Snake server, following the quick start guide <a href='https://docs.battlesnake.com/guides/getting-started'> Battlesnake guide</a>. You will need to create a Battlesnake and a replit account (you can use a Github account). We recommend choosing javascript or python, unless you know what you are doing ;) </li>
		<li>Set you snake colour to the one matching your team slack channel description and notify our crew that your snake is ready for battle, providing a url link to your snake server.</li>
		<li>A game round is a free for all battle with all snakes. We will watch the rounds on the big screen, there might be a final between the top snakes if there is a tie. </li>
	</ol>
	<p>If you get stuck with any anything just post in the help channel in slack and we can come by and assist. There might be some code clues hidden around the castle for algorithms</p>

	<section class='py-8'>
	<h3>Useful links</h3>
	<a href='https://docs.battlesnake.com/guides/getting-started'>Setup guide</a>
		|
		<a href='https://docs.battlesnake.com/references/api'>Battlesnake API</a> |
	<a href='/leaderboard'>Leaderboard</a>

	</section>
</main>

<style>
		h1 {
				@apply text-4xl leading-relaxed;
		}
	h2, h3 {
		@apply text-2xl ;
	}
	p, li {
			@apply leading-relaxed text-xl pt-8
	}
	a {
			text-decoration: underline;
			@apply underline text-green-400 hover:text-white;
	}

</style>

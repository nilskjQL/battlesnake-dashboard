<script>
	import '../app.css';
</script>

<div class='bg-gray-900 h-full text-white'>
	<slot />
</div>

<style global>
	body {
		@apply text-white;
	}

	h1 {
		@apply text-4xl leading-relaxed;
	}

	h2, h3 {
		@apply text-2xl ;
	}

	p, li {
		@apply leading-relaxed text-xl pt-8
	}

	li {
		@apply ml-4;
	}

	a {
		text-decoration: underline;
		@apply underline text-green-400 hover:text-white;
	}

</style>

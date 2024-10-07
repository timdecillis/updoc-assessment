<script>
	import '../app.css';
	import { store } from '$lib/store.js';
	export let data;
	store.set(data);
</script>

<div>
	<a href="/">
		<div class="p-4 border-slate-700 bg-gradient-to-br from-green-200 to-blue-300">
			<div class="text-5xl">Company Directory</div>
		</div>
	</a>
	<slot />
</div>

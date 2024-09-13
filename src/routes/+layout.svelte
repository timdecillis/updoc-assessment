<script>
	import '../app.css';
	import { store } from '$lib/store';
	export let data;
	store.set(data);
</script>

<div>
	<div class="p-4 border-b-2 border-slate-700 bg-gradient-to-br from-green-200 to-blue-300">
		<div class="text-5xl">Company Directory</div>
	</div>
	<slot />
</div>

<script lang="ts">
	export let companyName;
	import { store } from './store';
	import type { StoreType } from './types';
	const catchPhrase: string = $store[companyName as keyof StoreType].catchPhrase;
	const employeeCount = $store[companyName as keyof StoreType].employeeCount;
</script>

<div
	class="bg-gradient-to-br hover:from-green-300 hover:to-blue-400 border bg-slate-200 m-2 p-2 rounded-md"
>
	<a class="" href={`employees/${companyName}`}>
		<div class="text-xl">{companyName}</div>
		<div class="font-bold">"{catchPhrase}"</div>
		<div class="text-sm">Total employees: {employeeCount}</div>
	</a>
</div>

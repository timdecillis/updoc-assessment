<script lang="ts">
	import EmployeeCard from '$lib/EmployeeCard.svelte';
	import { store } from '$lib/store.js';
	export let data;
	const companyName = data.company;
	import type { EmployeeType, StoreType } from '$lib/types.js';

	let employees: EmployeeType[] = [];
	let sorted: EmployeeType[] = [];

	$: {
		const typedStore = $store as StoreType;
		employees = $store[companyName]?.employees || [];
		sorted = [...employees].sort((first, second) => {
			const lastName = (name: string) => name?.split(' ').pop() || '';
			if (lastName(first.name) < lastName(second.name)) return -1;
			if (lastName(first.name) > lastName(second.name)) return 1;
			return 0;
		});
	}
</script>

{#each sorted as employee, i}
	<EmployeeCard {employee} {companyName} />
{/each}

<script>
	import EmployeeCard from '$lib/EmployeeCard.svelte';
	import { store } from '$lib/store.js';
	export let data;
	const companyName = data.companyName;

	function lastName(name) {
		const stringArray = name.split(' ');
		return stringArray[stringArray.length - 1];
	}

	let employees = [];
	let sorted = [];

	// Reactive statement to update employees and sorted list when store changes
	$: {
		employees = $store[companyName]?.employees || [];
		sorted = [...employees].sort((first, second) => {
			const lastName = (name) => name.split(' ').pop();
			if (lastName(first.name) < lastName(second.name)) return -1;
			if (lastName(first.name) > lastName(second.name)) return 1;
			return 0;
		});
	}
</script>

{#each sorted as employee, i}
	<EmployeeCard {employee} {companyName} />
{/each}

<script>
	import EmployeeCard from '$lib/EmployeeCard.svelte';
	import { store } from '$lib/store.js';
	export let data;
	const companyName = data.companyName;
	const employees = $store[companyName].employees;

	function lastName(name) {
		const stringArray = name.split(' ');
		return stringArray[stringArray.length - 1];
	}

	const sorted = employees.sort((first, second) => {
		if (lastName(first.name) < lastName(second.name)) return -1;
		if (lastName(first.name) > lastName(second.name)) return 1;
		return 0;
	});
</script>

{#each sorted as employee, i}
	<EmployeeCard {companyName} name={employee.name} email={employee.email} phone={employee.phone} />
{/each}

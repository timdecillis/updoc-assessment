<script lang="ts">
	export let companyName, employee;
	import { store } from './store';

	const { name, email, phone } = employee;

	const companies = Object.keys($store);
	let selectedCompany: string;
	const handleReassign = () => {
		store.update((currentStore) => {
		// Get the employees from the former and new companies
		const formerCompanyEmps = currentStore[companyName]?.employees || [];
		const reassignedCompanyEmps = currentStore[selectedCompany]?.employees || [];

		// Add the employee to the new company's list
		const newReassignedCompanyEmps = [...reassignedCompanyEmps, employee];

		// Remove the employee from the former company's list
		const newFormerCompanyEmps = formerCompanyEmps.filter(emp => emp.name !== employee.name);

		// Update the current store with the new lists
		return {
			...currentStore,
			[companyName]: {
				...currentStore[companyName],
				employees: newFormerCompanyEmps
			},
			[selectedCompany]: {
				...currentStore[selectedCompany],
				employees: newReassignedCompanyEmps
			}
		};
	});
	};
</script>

<div class="p-4">
	<div class="text-xl font-bold">{name}</div>
	<div><span class="font-bold">Email:</span> {email}</div>
	<div><span class="font-bold">Phone: </span>{phone}</div>
	<label for="companies">Reassign:</label>
	<select bind:value={selectedCompany} id="companies" name="options">
		{#each companies as company}
			<option selected={companyName === company} value={company}>{company}</option>
		{/each}
	</select>
	<button
		class="rounded-md p-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white"
		on:click={handleReassign}>Reassign</button
	>
</div>

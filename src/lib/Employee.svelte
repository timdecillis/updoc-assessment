<script lang="ts">
	import { goto } from '$app/navigation';
	import { store } from './store';
	import type { StoreType } from './types';

	export let employeeID;
	export let company;

	employeeID = parseInt(employeeID);

	const employee = $store[company].employees.filter((employee) => {
		return employee.id === employeeID;
	})[0];

	const { email, phone, name } = employee;

	const companiesToSelect = Object.keys($store).filter((name) => name !== company);

	let selectedCompany: string;
	const handleReassign = () => {
		store.update((currentStore: StoreType) => {
			const formerCompanyEmps = currentStore[company]?.employees || [];
			const reassignedCompanyEmps = currentStore[selectedCompany]?.employees || [];

			const newReassignedCompanyEmps = [...reassignedCompanyEmps, employee];

			const newFormerCompanyEmps = formerCompanyEmps.filter((emp) => emp.name !== employee.name);

			return {
				...currentStore,
				[company]: {
					...currentStore[company],
					employees: newFormerCompanyEmps,
					employeeCount: currentStore[company].employeeCount - 1
				},
				[selectedCompany]: {
					...currentStore[selectedCompany],
					employees: newReassignedCompanyEmps,
					employeeCount: currentStore[selectedCompany].employeeCount + 1
				}
			};
		});
		goto(`../${company}`, { replaceState: true });
	};
</script>

<div>{name}</div>
<div><span class="font-bold">Email:</span> {email}</div>
<div><span class="font-bold">Phone: </span>{phone}</div>
<label for="companies">Reassign to:</label>
<select bind:value={selectedCompany} id="companies" name="options">
	{#each companiesToSelect as companyChoice}
		<option selected={company === companyChoice} value={companyChoice}>{companyChoice}</option>
	{/each}
</select>
<button
	class="rounded-md p-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white"
	on:click={handleReassign}>Reassign</button
>

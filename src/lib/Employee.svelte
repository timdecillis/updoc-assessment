<script lang="ts">
	import { store } from './store';
	import type { StoreType } from './types';
	const companies = Object.keys($store).filter((name) => name !== companyName);
	let selectedCompany: string;
	const handleReassign = () => {
		store.update((currentStore: StoreType) => {
			const formerCompanyEmps = currentStore[companyName]?.employees || [];
			const reassignedCompanyEmps = currentStore[selectedCompany]?.employees || [];

			const newReassignedCompanyEmps = [...reassignedCompanyEmps, employee];

			const newFormerCompanyEmps = formerCompanyEmps.filter((emp) => emp.name !== employee.name);

			return {
				...currentStore,
				[companyName]: {
					...currentStore[companyName],
					employees: newFormerCompanyEmps,
					employeeCount: currentStore[companyName].employeeCount - 1
				},
				[selectedCompany]: {
					...currentStore[selectedCompany],
					employees: newReassignedCompanyEmps,
					employeeCount: currentStore[selectedCompany].employeeCount + 1
				}
			};
		});
	};
	const employee = 'foobar';
	const email = 'foo';
	const phone = 'bar';
	const companyName = 'foo';
</script>

<div>Employee Details</div>
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

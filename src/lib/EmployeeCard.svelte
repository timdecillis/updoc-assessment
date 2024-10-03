<script lang="ts">
	export let companyName, employee;
	// import { store } from './store';
	// import type { StoreType } from './types';

	const { name, id } = employee;

	// const companies = Object.keys($store).filter((name) => name !== companyName);
	// let selectedCompany: string;
	// const handleReassign = () => {
	// 	store.update((currentStore: StoreType) => {
	// 		const formerCompanyEmps = currentStore[companyName]?.employees || [];
	// 		const reassignedCompanyEmps = currentStore[selectedCompany]?.employees || [];

	// 		const newReassignedCompanyEmps = [...reassignedCompanyEmps, employee];

	// 		const newFormerCompanyEmps = formerCompanyEmps.filter((emp) => emp.name !== employee.name);

	// 		return {
	// 			...currentStore,
	// 			[companyName]: {
	// 				...currentStore[companyName],
	// 				employees: newFormerCompanyEmps,
	// 				employeeCount: currentStore[companyName].employeeCount - 1
	// 			},
	// 			[selectedCompany]: {
	// 				...currentStore[selectedCompany],
	// 				employees: newReassignedCompanyEmps,
	// 				employeeCount: currentStore[selectedCompany].employeeCount + 1
	// 			}
	// 		};
	// 	});
	// };
</script>

<a href={`${companyName}/${id}`}>
	<div class="p-4 border-black hover:bg-slate-400">
		<div class="text-xl font-bold">{name}</div>
	</div>
</a>

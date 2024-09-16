import type { EmployeeType, StoreType } from '$lib/types';

export async function load() {
	const companiesData: StoreType = {};

	const url = 'https://jsonplaceholder.typicode.com/users';
	const response = await fetch(url);
	const data =  await response.json();

	data.forEach((employee: EmployeeType, i: number) => {
		const employeeCompany = employee.company;
		const companyName = employee.company.name;
		if (!companiesData[companyName]) {
			companiesData[companyName] = { ...employeeCompany, employeeCount: 0, employees: [], id: i };
		}
		companiesData[companyName].employeeCount++;
		companiesData[companyName].employees.push(data[i]);
	});

	return companiesData;
}

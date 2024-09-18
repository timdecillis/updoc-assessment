import { writable } from 'svelte/store';
import type { EmployeeType, StoreType } from '$lib/types';

function createCompaniesStore() {
    const { subscribe, set } = writable<StoreType>({});

    const fetchCompanies = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        const data = await response.json();

        const companiesData: StoreType = {};

        data.forEach((employee: EmployeeType, i: number) => {
            const employeeCompany = employee.company;
            const companyName = employee.company.name;

            if (!companiesData[companyName]) {
                companiesData[companyName] = {
                    ...employeeCompany,
                    employeeCount: 0,
                    employees: [],
                    id: i
                };
            }

            companiesData[companyName].employeeCount++;
            companiesData[companyName].employees.push(employee);
        });

        set(companiesData);
    };

    return {
        subscribe,
        fetchCompanies
    };
}

export const companiesStore = createCompaniesStore();
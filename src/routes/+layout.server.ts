import type { EmployeeType } from '$lib/types';
import axios from 'axios'

export async function load() {
  const companiesData = {}

  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = await axios.get(url)
  const data = response.data;

  data.forEach((employee: EmployeeType, i: number) => {
    const employeeCompany = employee.company;
    const companyName = employee.company.name;
    if (!companiesData[companyName]) {
      companiesData[companyName] = { ...employeeCompany, employeeCount: 0, employees: [], id: i };
    }
    companiesData[companyName].employeeCount++;
    companiesData[companyName].employees.push(data[i]);
  })

  return companiesData
}
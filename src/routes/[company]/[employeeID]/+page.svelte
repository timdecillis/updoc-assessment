<script>
	import Employee from '$lib/Employee.svelte';
	export let data;
	const { employeeID, companyName } = data;
</script>

<Employee {employeeID} {companyName} />

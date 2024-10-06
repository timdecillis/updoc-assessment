<script>
	import Employee from '$lib/Employee.svelte';
	export let data;
	const { employeeID, company } = data;
</script>

<Employee {employeeID} {company} />

<script lang="ts">
	import Employee from '$lib/Employee.svelte';
	export let data: { employeeID: string; company: string };
	const { employeeID, company } = data;
</script>

<Employee {employeeID} {company} />
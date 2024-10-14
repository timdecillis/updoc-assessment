<script lang="ts">
	import Employee from '$lib/Employee.svelte';
	export let data: { employeeID: number; company: string };
	const { employeeID, company } = data;
</script>

<Employee {employeeID} {company} />
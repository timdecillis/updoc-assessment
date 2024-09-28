<script>
	export let data;
	const companies = data.companies;
</script>

<div class="text-center font-bold text-3xl">Update page</div>
{#each companies as company}
	<div>{company.name}</div>
{/each}

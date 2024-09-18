<script>
	import CompanyCard from '$lib/CompanyCard.svelte';
	import { store } from '$lib/store';
	const sorted = Object.keys($store).sort();

	// import { companiesStore } from '$lib/modStore';
	// import { onMount } from 'svelte';

	// onMount(() => {
	// 	companiesStore.fetchCompanies();
	// });
</script>

<div class="p-4">
	{#each sorted as companyName}
		<CompanyCard {companyName} />
	{/each}
</div>

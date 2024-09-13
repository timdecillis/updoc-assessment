<script lang="ts">
	export let companyName, name, email, phone;
	import { store } from './store';
	const companies = Object.keys($store);
	console.log('comps:', name);
</script>

<div class="p-4">
	<div class="text-xl font-bold">{name}</div>
	<div><span class="font-bold">Email:</span> {email}</div>
	<div><span class="font-bold">Phone: </span>{phone}</div>
	<label for="companies">Reassign:</label>
	<select id="companies" name="options">
		{#each companies as company}
			<option selected={companyName === company} value={company}>{company}</option>
		{/each}
	</select>
</div>

<div>Employee Details</div>
<div><span class="font-bold">Email:</span> {email}</div>
<div><span class="font-bold">Phone: </span>{phone}</div>
<label for="companies">Reassign:</label>
<select bind:value={selectedCompany} id="companies" name="options">
	{#each companies as company}
		<option selected={companyName === company} value={company}>{company}</option>
	{/each}
</select>
<button
	class="rounded-md p-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white"
	on:click={handleReassign}>Reassign</button
>

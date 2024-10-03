<script lang="ts">
	export let companyName, employee;

	const { name, id } = employee;
</script>

<a href={`${companyName}/${id}`}>
	<div class="p-4 border-black hover:bg-slate-400">
		<div class="text-xl font-bold">{name}</div>
	</div>
</a>

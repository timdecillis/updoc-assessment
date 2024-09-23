<script>
	export let data;
	const companyName = data.companyName;
</script>

<div class="text-3xl text-center border-b-2 p-4">{companyName}</div>
<slot />

<script>
  export let companyName, catchPhrase, employeeCount
</script>

<div class="bg-gradient-to-br hover:from-green-300 hover:to-blue-400 border border-black bg-slate-200 m-2 p-2 rounded-md">
  <a class="" href={`employees/${companyName}`}>
    <div class="text-xl">{companyName}</div>
    <div class="font-bold" >"{catchPhrase}"</div>
    <div class="text-sm">Total employees: {employeeCount}</div>
  </a>
</div>
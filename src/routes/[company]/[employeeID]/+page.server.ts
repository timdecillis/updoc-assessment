export function load({ params }) {
	const { employeeID, company } = params;
	console.log(params)
	return {
		employeeID,
		companyName: company
	};
}

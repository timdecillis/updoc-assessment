export function load({ params }) {
	const { employeeID, company } = params;
	return {
		employeeID,
		companyName: company
	};
}

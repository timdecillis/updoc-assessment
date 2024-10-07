export function load({ params }) {
	const { employeeID, company } = params;
	console.log('params:', params)
	return {
		employeeID,
		company
	};
}

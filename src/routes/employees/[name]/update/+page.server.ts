import { store } from "$lib/store";

export function load() {
	return {
		companies: [
			{
				name: 'foo'
			},
			{
				name: 'bar'
			}
		]
	};
}

export type Store = {
	[key: string]: CompanyType;
};

export type EmployeeType = {
	id: string;
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		};
	};
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	};
};

export type CompanyType = {
	catchPhrase: string;
	employeeCount: number;
	name: string;
	employees: EmployeeType[];
};

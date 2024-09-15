export type Store = {
	[key: string]: CompanyType;
};

export type EmployeeType = {
	id: string;
	name: string;
	username: string;
	email: string;
	address: AddressType;
	phone: string;
	website: string;
	company: EmployeeCompanyType;
};

export type CompanyType = {
	catchPhrase: string;
	employeeCount: number;
	name: string;
	employees: EmployeeType[];
};

type EmployeeCompanyType = {
	name: string;
	catchPhrase: string;
	bs: string;
};

type AddressType = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: {
		lat: string;
		lng: string;
	};
};

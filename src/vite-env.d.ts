/// <reference types="vite/client" />
interface HeaderProps {
	setRenderHome: React.Dispatch<React.SetStateAction<boolean>>;
	isValid: boolean
}

interface TextAreaElement {
	labelText: string;
	id: "question";
}

interface InputElementProps extends TextAreaElement {
	type: string;
	id: "firstName" | "lastName" | "email" | "phone";
}

interface CountriesNamesInitialState {
	countries: Country[];
	isLoading: boolean;
	userCountry: string
}

interface InitialCountry {
	name: {
		common: string;
		official: string;
	};
	idd: {
		root: string;
		suffixes: string[];
	};
	altSpellings: string[];
}

interface Country {
	name: {
		common: string;
		official: string;
	};
	idd: {
		root: string;
		suffix: string;
	};
	altSpellings: string[]
}

interface ContactInitialState {
	firstName: string;
	lastName: string;
	email: string;
	countryPrefix: string;
	phone: string;
	question: string;
}

interface ContactPayload {
	id:
		| "firstName"
		| "lastName"
		| "email"
		| "countryPrefix"
		| "phone"
		| "question";
	value: string;
}

interface ButtonProps {
	btnText: string
	handleClick: () => void
}

interface ContactProps {
	isValid: boolean
	setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WarningProps {
	closeMsg: React.Dispatch<React.SetStateAction<boolean>>;
}
/// <reference types="vite/client" />
interface HeaderProps {
	setRenderHome: React.Dispatch<React.SetStateAction<boolean>>;
	isValid: boolean;
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
	// userCountry: string
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
	altSpellings: string[];
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
	btnText: string;
	handleClick: (ev?) => void;
	id?: string
}

interface ContactProps {
	isValid: boolean;
	setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WarningProps {
	closeMsg: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LocationInitialState {
	userLocation: {
		status;
		result: {
			timezone: Timezone;
			components: Components;
			formatted: string;
		};
	};
	userCoordinates: Coords 
	isLoading: boolean;
	searchedLocation: string;
}

interface Coords {
	latitude: number | undefined;
	longitude: number | undefined;
}

interface Timezone {
	name: string;
	offset_sec: number;
	short_name: string;
}

interface Components {
	city: string | undefined;
	city_district: string | undefined;
	county: string | undefined;
	continent: string;
	country: string;
	country_code: string;
	house_number: string | undefined;
	postcode: string;
	road: string;
	village: string | undefined;
	state: string | undefined;
}

interface WeatherInitialState {
	isLoadingCurr: boolean;
	isLoadingForecast: boolean;
	currentWeather: CurrentWeather | undefined;
	weatherForecast: ForecastWeather | undefined;
}

interface CurrentWeather {
	coord: { lat: number; lon: number };
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	rain?: { "1h": number | undefined; "3h": number | undefined };
	snow?: { "1h": number | undefined; "3h": number | undefined };
	clouds: { all: number };
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

interface Sys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

interface ForecastWeather {
	cod: string;
	message: number;
	cnt: number;
	list: Array<ListItem>;
	city: City;
}

interface ListItem {
	dt: number;
	main: Main;
	weather: Weather[];
	clouds: { all: number };
	wind: Wind;
	visibility: number;
	pop: number;
	rain?: { "3h": number };
	snow?: { "3h": number };
	sys: { pod: string };
	dt_txt: string;
}

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

type City = {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
};

interface ListItemProps {
	text: JSX.Element
}

interface LeafletMapProps {
	coords: Coords 
}

// interface WeatherForecastProps {
// 	// data: ForecastWeather
// }

interface DailyForecastProps {
	data: ListItem
}
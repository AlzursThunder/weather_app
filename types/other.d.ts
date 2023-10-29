interface Link {
	path: string;
	title: string;
}

type Ids = "first_name" | "last_name" | "email" | "message";

interface FormCotrolData {
	labelTitle: string;
	id: Ids;
	inputType?: React.HTMLInputTypeAttribute;
	renderInput: boolean;
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

interface WeatherForecast {
	cod: string;
	message: number;
	cnt: number;
	list: Array<ListItem>;
	city: City;
}

interface Sys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
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

interface Coords {
	lat: number;
	lon: number;
}
interface ContactInitialState {
	first_name: string;
	last_name: string;
	email: string;
	message: string;
}

interface PlaceholderData {
	currentWeather: CurrentWeather[];
	weatherForecast: WeatherForecast[];
}

interface UserInitialState {
	isPendingCoords: boolean;
	isPendingWeather: boolean;
	userCoords: undefined | Coords;
	userLocationWeather:
		| {
				currentWeather: CurrentWeather;
				weatherForecast: WeatherForecast;
		  }
		| undefined;
}

interface SearchedLocationInitialState {
	isPending: boolean;
	weather:
		| {
				current: CurrentWeather;
				forecast: WeatherForecast;
		  }
		| undefined;
	previouslySearched: string[];
}

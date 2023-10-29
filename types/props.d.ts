interface HeadLinkProps {
	data: Link;
	isCurrent: boolean;
}

interface HeaderLinksProps {
	path: string;
}

interface FormControlProps {
	handleChange: (
		ev:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => void;
	labelTitle: string;
	id: Ids;
	inputValue: string;
	inputType?: React.HTMLInputTypeAttribute;
	renderInput: boolean;
}

interface CurrentWeatherProps {
	weatherState: CurrentWeather;
	country?: string;
	coords?: {
		lat: number;
		lon: number;
	};
}

interface ListItemProps {
	text: JSX.Element;
}

interface WeatherForecastProps {
	weatherState: WeatherForecast;
}

interface HourForecastProps {
	data: ListItem;
}

interface LeafletMapProps {
	coords: Coords;
}

interface SearchedWeatherProps {
	params: {
		id: string;
	};
}

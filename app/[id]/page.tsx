import CurrentWeather from "@/components/CurrentWeather";
import SearchBar from "@/components/SearchBar";
import WeatherForecast from "@/components/WeatherForecast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { errCities, } from "@/constants";
import { fetchSearchedWeather } from "@/utils";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchedWeather: React.FC<SearchedWeatherProps> = async ({ params }) => {
	const res = await fetchSearchedWeather(params.id);

	if (res.status !== 200)
		return (
			<div>
				<SearchBar />
				<div>
					Sorry. Something went wrong. Please go back to{" "}
					<Link
						href={"/"}
						className="font-semibold tracking-wide"
					>
						Home page
					</Link>
				</div>
			</div>
		);

	const data = (await res.json()) as {
		currentWeather: CurrentWeather;
		weatherForecast: WeatherForecast;
	};

	if (data.currentWeather.cod !== 200 || data.weatherForecast.cod !== "200")
		return (
			<div>
				<SearchBar />
				<div className="px-2 mt-5">
					<Alert variant="destructive" className="animate-pulse">
						<AlertCircle className="w-4 h-4" />
						<AlertTitle>There is no weather data for{" "}
							<span className="font-semibold">{params.id}</span>.</AlertTitle>
						<AlertDescription>
							Please check if
							searched name is correct and try again.
						</AlertDescription>
					</Alert>
					<div className="mt-3 animate-none">
						<h3 className="text-lg font-semibold">You can also check out weather in those cities:</h3>
						<div className="flex flex-row flex-wrap gap-2">
							{errCities.map(city => (
								<Link href={`/${city}`} key={city}>
									<Button>
										{city}
									</Button>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		);

	return (
		<div>
			<SearchBar />
			<div className="px-1 mt-4">
				<CurrentWeather weatherState={data.currentWeather} />
				<WeatherForecast weatherState={data.weatherForecast} />
			</div>
		</div>
	);
};

export default SearchedWeather;

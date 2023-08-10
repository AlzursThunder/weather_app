import { NextResponse } from "next/server";
import fetchData from "./fetchData";

export default async function fetchSearchedWeather(city: string) {
	try {
		const OPEN_WEATHER_MAP_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
		const OPEN_WEATHER_MAP_URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;

		const weatherForecast = await fetchData(OPEN_WEATHER_MAP_URL_FORECAST, 0);
		const currentWeather = await fetchData(OPEN_WEATHER_MAP_URL_CURRENT, 0);
		return new NextResponse(JSON.stringify({
			currentWeather,
			weatherForecast
		}), { status: 200 })
	} catch (error) {
		return new NextResponse(JSON.stringify(error), { status: 500 });
	}
}

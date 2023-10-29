import { fetchData } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	try {
		const { lat, lon } = await req.json();
		if (!lat || !lon)
			return new NextResponse("Either one or both coordinates are missing.", {
				status: 200,
			});

		const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;

		const WEATHER_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
		const currentWeather = await fetchData(CURRENT_WEATHER_URL);
		const weatherForecast = await fetchData(WEATHER_FORECAST_URL);

		return new NextResponse(
			JSON.stringify({
				currentWeather,
				weatherForecast,
			}),
			{ status: 200 }
		);
	} catch (error) {
		return new NextResponse(JSON.stringify(error), { status: 500 });
	}
};

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchData } from "@/utils";
// import { cities } from "@/constants";

import { cities } from "@/constants";
import { fetchData } from "@/utils";

// export const fetchPlaceholderForecast = createAsyncThunk('placeholder-weather/forecast', async (_, thunkAPI) => {
// 	try {
// 		const data: Array<Promise<ForecastWeather>> = cities.map(async (city) => {
// 			const OPEN_WEATHER_MAP_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
// 			return fetchData(OPEN_WEATHER_MAP_URL_FORECAST);
// 		})
// 		const res = await Promise.all(data)
// 		return res
// 	} catch (error) {
// 		return thunkAPI.rejectWithValue(error)
// 	}
// })

export const fetchPlaceholderForecast = async () => {
	try {
		const data: Array<Promise<WeatherForecast>> = cities.map(async (city) => {
			const OPEN_WEATHER_MAP_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
			return fetchData(OPEN_WEATHER_MAP_URL_FORECAST, 600);
		});
		const res = await Promise.all(data);
		return res;
	} catch (error) {
		console.error(error);
		return;
	}
};

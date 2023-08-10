import { cities } from "@/constants";
import { fetchData } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCurrentPlaceholder = createAsyncThunk('placeholder-weather/current', async(_, thunkAPI) => {
// 	try {
// 		const data: Array<Promise<CurrentWeather>> = cities.map(async (city) => {
// 			const OPEN_WEATHER_MAP_URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
// 			return fetchData(OPEN_WEATHER_MAP_URL_CURRENT)
// 		})
// 		const res = await Promise.all(data)
// 		return res
// 	} catch (error) {
// 		return thunkAPI.rejectWithValue(error)
// 	}
// })
export const fetchCurrentPlaceholder = async () => {
	try {
		const data: Array<Promise<CurrentWeather>> = cities.map(async (city) => {
			const OPEN_WEATHER_MAP_URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
			return fetchData(OPEN_WEATHER_MAP_URL_CURRENT, 600);
		});
		const res = await Promise.all(data);
		return res;
	} catch (error) {
		console.error(error);
		return;
	}
};

import { RootState } from "@/redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeatherData = createAsyncThunk(
	"user/weather-data",
	async (_, thunkAPI) => {
		try {
			const { user } = thunkAPI.getState() as RootState;
			const res = await fetch("/api/user", {
				body: JSON.stringify(user.userCoords),
				method: "POST",
			});
			const data = await res.json();

			return thunkAPI.fulfillWithValue({
				currentWeather: data.currentWeather,
				weatherForecast: data.weatherForecast,
			});
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

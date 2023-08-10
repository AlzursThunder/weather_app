import { createSlice } from "@reduxjs/toolkit";
import { getUserCoords } from "./getUserCoords";
import { getWeatherData } from "./getWeatherData";

const initialState: UserInitialState = {
	isPendingCoords: false,
	isPendingWeather: false,
	userCoords: undefined,
	userLocationWeather: undefined,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getUserCoords.pending, (state) => ({
				...state,
				isPendingCoords: true,
			}))
			.addCase(getUserCoords.fulfilled, (state, action) => ({
				...state,
				userCoords: action.payload,
				isPendingCoords: false,
			}))
			.addCase(getUserCoords.rejected, (state) => ({
				...state,
				isPendingCoords: false,
			}))
			.addCase(getWeatherData.pending, (state) => ({
				...state,
				isPendingWeather: true,
			}))
			.addCase(getWeatherData.fulfilled, (state, action) => ({
				...state,
				isPendingWeather: false,
				userLocationWeather: action.payload,
			}))
			.addCase(getWeatherData.rejected, (state) => ({
				...state,
				isPendingWeather: false,
			}));
	},
});

export default userSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserCoordinates = createAsyncThunk(
	"location/userCoordinates",
	async (_, thunkApi) => {
		try {
			if (!navigator.geolocation) {
				console.log("Geolocation is not supported by this browser/device.");
				return thunkApi.rejectWithValue("Geolocation is not supported.");
			}
			return new Promise<{
				latitude: number;
				longtitude: number;
			}>((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						const tmp = {
							latitude: latitude,
							longtitude: longitude,
						};
						resolve(tmp);
					},
					(error) => {
						reject(error);
					}
				);
			});
			
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

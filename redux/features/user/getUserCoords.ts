import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserCoords = createAsyncThunk(
	"user/coords",
	async (_, thunkAPI) => {
		try {
			if (!navigator.geolocation) {
				return thunkAPI.rejectWithValue(
					"Geolocation is not supported by this browser/device."
				);
			}

			return new Promise<Coords>((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						resolve({
							lat: latitude,
							lon: longitude,
						});
					},
					(err) => reject(err)
				);
			});
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

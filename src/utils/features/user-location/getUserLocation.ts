import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../store";

const API_KEY_LOCATION_TEST = "6d0e711d72d74daeb2b0bfd2a5cdfdba";
// free opencagedata API keys for testing
// key 																response
// 6d0e711d72d74daeb2b0bfd2a5cdfdba 	200 - OK *
// 4372eff77b8343cebfc843eb4da4ddc4 	402 - quota exceeded
// 2e10e5e828262eb243ec0b54681d699a 	403 - disabled
// 6c79ee8e1ca44ad58ad1fc493ba9542f 	403 - IP address rejected
// d6d0f0065f4348a4bdfe4587ba02714b 	429 - requesting too quickly

export const getUserLocation = createAsyncThunk(
	"location/userLocation",
	async (_, thunkApi) => {
		try {
			const { location } = thunkApi.getState() as RootState;
			const { latitude, longitude } = location.userCoordinates
			const openCageDataUrl = `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY_LOCATION_TEST}&q=${latitude}%2C${longitude}&pretty=1`;

			const res = await axios(openCageDataUrl);
			return {
				status: res.data.status,
				results: res.data.results
			};
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

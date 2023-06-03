import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://restcountries.com/v3.1/all";

export const getCountriesNames = createAsyncThunk(
	"countries/getCountriesNames",
	async (_, thunkApi) => {
		try {
			// console.log(thunkApi);
			const res = await axios(URL);
			return res.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

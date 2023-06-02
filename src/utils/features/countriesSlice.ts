import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mergeSort } from "../functions";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";
const userCountryUrl = "https://ipapi.co/json/"

const initialState: CountriesNamesInitialState = {
	countries: [],
	isLoading: true,
	userCountry: ''
}

export const getCountriesNames = createAsyncThunk('countries/getCountriesNames', async (_, thunkApi) => {
	try {
		// console.log(thunkApi);
		const res = await axios(url)
		return res.data
	} catch (error) {
		return thunkApi.rejectWithValue(error)
	}
})

export const getUserCountry = createAsyncThunk("countries/getUserCountry", async (_, thunkApi) => {
	try {
		const res = await axios(userCountryUrl)
		return res.data.country_name
	} catch (err) {
		return thunkApi.rejectWithValue(err)
	}
});

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCountriesNames.pending, state => {
				return {
					...state,
					isLoading: true
				}
			})
			.addCase(getCountriesNames.fulfilled, (state, action) => {
				const tmp = action.payload
				const countries: Country[] = []
				tmp.forEach((country: InitialCountry) => {
					const { name, idd, altSpellings } = country
					if (!(idd.suffixes)) {
						countries.push({
							name,
							idd: {
								root: idd.root,
								suffix: ''
							},
							altSpellings
						})
					} else {
						idd.suffixes.forEach((suffix: string) => {
							countries.push({
								name,
							idd: {
								root: idd.root,
								suffix: suffix
							},
							altSpellings
							})
						})
					}
				})
				mergeSort(countries)
				return {
					...state,
					isLoading: false,
					countries
				}
			})
			.addCase(getCountriesNames.rejected, state => {
				return {
					...state,
					isLoading: false
				}
			})
			.addCase(getUserCountry.pending, state => {
				return state
			})
			.addCase(getUserCountry.fulfilled, (state, action) => {
				return {
					...state,
					userCountry: action.payload
				}
			})
			.addCase(getUserCountry.rejected, state => {
				return {
					...state,
					isLoading: false
				}
			})
	},
})

export default countriesSlice.reducer
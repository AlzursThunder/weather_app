import { createSlice } from "@reduxjs/toolkit";
import { mergeSort } from "../../functions";
import { getCountriesNames } from "./getCountriesNames";

const initialState: CountriesNamesInitialState = {
	countries: [],
	isLoading: true,
};

const countriesSlice = createSlice({
	name: "countries",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCountriesNames.pending, (state) => {
				return {
					...state,
					isLoading: true,
				};
			})
			.addCase(getCountriesNames.fulfilled, (state, action) => {
				const tmp = action.payload;
				const countries: Country[] = [];
				tmp.forEach((country: InitialCountry) => {
					const { name, idd, altSpellings } = country;
					if (!idd.suffixes) {
						countries.push({
							name,
							idd: {
								root: idd.root,
								suffix: "",
							},
							altSpellings,
						});
					} else {
						idd.suffixes.forEach((suffix: string) => {
							countries.push({
								name,
								idd: {
									root: idd.root,
									suffix: suffix,
								},
								altSpellings,
							});
						});
					}
				});
				mergeSort(countries);
				return {
					...state,
					isLoading: false,
					countries,
				};
			})
			.addCase(getCountriesNames.rejected, (state) => {
				return {
					...state,
					isLoading: false,
				};
			});
	},
});

export default countriesSlice.reducer;

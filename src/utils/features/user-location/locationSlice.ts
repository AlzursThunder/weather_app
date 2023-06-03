import { createSlice } from "@reduxjs/toolkit";
import { getUserCoordinates } from "./getUserCoordinates";
import { getUserLocation } from "./getUserLocation";


const initialState: LocationInitialState = {
	isLoading: false,
	userCoordinates: {
		latitude: 0,
		longitude: 0
	},
	userLocation: {
		results:'',
		status: ''
	}
}

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getUserCoordinates.pending, (state) => {
				return {
					...state,
					isLoading: true,
				};
			})
			.addCase(getUserCoordinates.fulfilled, (state, action) => {
				const { latitude, longtitude } = action.payload;
				return {
					...state,
					isLoading: false,
					userCoordinates: {
						latitude: latitude,
						longitude: longtitude,
					},
				};
			})
			.addCase(getUserCoordinates.rejected, (state) => {
				return {
					...state,
					isLoading: false,
				};
			})
			.addCase(getUserLocation.pending, state => {
				return {
					...state,
					isLoading: true
				}
			})
			.addCase(getUserLocation.fulfilled, (state, action) => {
				return {
					...state,
					isLoading: false,
					userLocation: action.payload
				}
			})
			.addCase(getUserLocation.rejected, state => {
				return {
					...state,
					isLoading: false
				}
			});
	},
})

export default locationSlice.reducer
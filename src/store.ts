import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./utils/features/countries/countriesSlice";
import contactReducer from "./utils/features/contact/contactSlice";
import weatherReducer from "./utils/features/weather/weatherSlice";
import locationReducer from './utils/features/user-location/locationSlice'
export const store = configureStore({
	reducer: {
		countries: countriesReducer,
		contact: contactReducer,
		location: locationReducer,
		weather: weatherReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

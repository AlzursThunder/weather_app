import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "@/redux/features/contact/contactSlice";
import userReducer from "@/redux/features/user/userSlice"
import searchLocationReducer from "@/redux/features/user/searched-location/searchedLocationSlice"

export const store = configureStore({
	reducer: {
		contact: contactReducer,
		user: userReducer,
		searchedLocation: searchLocationReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

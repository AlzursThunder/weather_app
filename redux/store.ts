import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '@/redux/features/contact/contactSlice'
export const store = configureStore({
	reducer: {
		contact: contactReducer
	},
	devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
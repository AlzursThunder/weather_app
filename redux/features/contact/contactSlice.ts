import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ContactInitialState = {
	email: "",
	first_name: "",
	last_name: "",
	message: "",
};

export const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		reset: () => initialState,
		update: (
			state,
			action: PayloadAction<{
				id: Ids;
				value: string;
			}>
		) => ({
			...state,
			[action.payload.id]: action.payload.value,
		}),
	},
});

export const { reset, update } = contactSlice.actions;

export default contactSlice.reducer;

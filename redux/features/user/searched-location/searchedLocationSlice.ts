import { createSlice } from "@reduxjs/toolkit";

const initialState: SearchedLocationInitialState = {
	isPending: false,
	weather: undefined,
	previouslySearched: [],
};

const searchedLocationSlice = createSlice({
	name: "searched-location",
	initialState,
	reducers: {
		updatePrevious: (state, { payload }: { payload: string }) => {
			const { previouslySearched } = state;

			if (!previouslySearched.includes(payload)) {
				const updatedPreviouslySearched = [
					payload,
					...previouslySearched.slice(0, 3),
				];

				return {
					...state,
					previouslySearched: updatedPreviouslySearched,
				};
			}
			return state;
		},
	},
});

export const { updatePrevious } = searchedLocationSlice.actions;
export default searchedLocationSlice.reducer;

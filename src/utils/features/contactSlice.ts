import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ContactInitialState = {
	countryPrefix: '',
	email: '',
	firstName: '',
	lastName: '',
	phone: '',
	question: ''
}

const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setState: (state, { payload }: PayloadAction<ContactPayload>) => {
			
			return ({
				...state,
				[payload.id]: payload.value
			})
		},
		resetState: () => {
			return {
				countryPrefix: '',
				email: '',
				firstName: '',
				lastName: '',
				phone: '',
				question: ''
			}
		}
	}
})

export const { setState, resetState } = contactSlice.actions 
export default contactSlice.reducer
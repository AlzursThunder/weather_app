import React, { useState, useEffect } from 'react'
import { Header, Home, Contact } from './components'
import { useAppDispatch } from './hooks'
import { getCountriesNames, } from './utils/features/countries/getCountriesNames'
import { getUserCoordinates } from './utils/features/user-location/getUserCoordinates'
import { getUserLocation } from './utils/features/user-location/getUserLocation'
function App() {
	const [renderHome, setRenderHome] = useState(true)
	const [isValid, setIsValid] = useState<boolean>(true)
	const thunkDispatch = useAppDispatch()
	useEffect(() => {
		thunkDispatch(getCountriesNames())
		thunkDispatch(getUserCoordinates())
			.then(() => thunkDispatch(getUserLocation()))
	}, [])

	return (
		<>
			<Header setRenderHome={setRenderHome} isValid={isValid} />
			<div className='px-2'>
				{
					renderHome ?
						<Home /> :
						<Contact isValid={isValid} setIsValid={setIsValid} />
				}
			</div>
		</>
	)
}

export default App

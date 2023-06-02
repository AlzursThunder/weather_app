import React, { useState, useEffect } from 'react'
import {  Header, Home, Contact } from './components'
import { useAppDispatch } from './hooks'
import { getCountriesNames, getUserCountry } from './utils/features/countriesSlice'

function App() {
	const [renderHome, setRenderHome] = useState(false)
	const [isValid, setIsValid] = useState<boolean>(true)
	const thunkDispatch = useAppDispatch()
	useEffect(() => {
		thunkDispatch(getCountriesNames())
		thunkDispatch(getUserCountry())
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

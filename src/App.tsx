import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Header, Home, } from './components'
const Contact = lazy(() => import('./components/Contact'))
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
						<Home /> : (
							<Suspense fallback={<h4>Loading...</h4>}>
								<Contact isValid={isValid} setIsValid={setIsValid} />
							</Suspense>
						)
				}
			</div>
		</>
	)
}

export default App

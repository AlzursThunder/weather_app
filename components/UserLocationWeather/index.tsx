"use client"
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getUserCoords } from '@/redux/features/user/getUserCoords'
import { getWeatherData } from '@/redux/features/user/getWeatherData'
import CurrentWeather from '../CurrentWeather'
import WeatherForecast from '../WeatherForecast'
import { Progress } from '../ui/progress'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { AlertCircle } from 'lucide-react'

const UserLocationWeather = () => {
	const dispatch = useAppDispatch()
	const userData = useAppSelector((state) => state.user)
	const [progress, setProgress] = useState(13)
	useEffect(() => {
		dispatch(getUserCoords())
			.then(() => dispatch(getWeatherData()))
	}, [dispatch])

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500)
		return () => clearTimeout(timer)
	}, [])

	if (userData.userCoords === undefined) return

	if (userData.isPendingCoords || userData.isPendingWeather) return (
		<div className="flex items-center justify-center py-6">
			<Progress value={progress} className="w-[75%]" />
		</div>
	)

	if (userData.userLocationWeather?.currentWeather.cod !== 200 || userData.userLocationWeather?.weatherForecast.cod !== "200") return (
		<Alert variant="destructive" className="animate-pulse">
			<AlertCircle className="w-4 h-4" />
			<AlertTitle>There is no weather data for your current location.</AlertTitle>
		</Alert>
	)

	return (
		<div className='mb-16'>
			{userData.userLocationWeather?.currentWeather && (
				<>
					<CurrentWeather weatherState={userData.userLocationWeather?.currentWeather} coords={userData.userCoords} />
					<WeatherForecast weatherState={userData.userLocationWeather?.weatherForecast} />
				</>
			)}
		</div>
	)
}

export default UserLocationWeather
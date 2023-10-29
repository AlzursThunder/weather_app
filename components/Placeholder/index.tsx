import { fetchCurrentPlaceholder, fetchPlaceholderForecast } from '@/utils/'
import { NextResponse } from 'next/server'
import React from 'react'
import CurrentWeather from '../CurrentWeather'
import WeatherForecast from '../WeatherForecast'
import Carousel from '../Carousel/index';

const Placeholder: React.FC = async () => {
	const res = await fetchPlaceholderData()
	const data = res.status === 200 ? await res.json() as PlaceholderData : undefined

	return (
		<div>
			<p className='text-2xl font-semibold border-b border-b-slate-400'>Check out weather from the most popular cities worldwide</p>
			<Carousel>
				{
					data && (
						data.currentWeather.map((item, index) => (
							<div>
								<CurrentWeather weatherState={item} key={item.id} />
								<WeatherForecast weatherState={data.weatherForecast[index]} key={index} />
							</div>
						))
					)
				}
			</Carousel>
		</div>
	)
}

async function fetchPlaceholderData() {
	try {
		const current = await fetchCurrentPlaceholder()
		const forecast = await fetchPlaceholderForecast()
		return new NextResponse(JSON.stringify({
			currentWeather: current,
			weatherForecast: forecast
		}), { status: 200 })
	} catch (error) {
		return new NextResponse(JSON.stringify(error), { status: 500 })
	}
}

export default Placeholder
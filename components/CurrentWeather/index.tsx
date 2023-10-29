import { formatDate } from '@/utils'
import React from 'react'
import ListItem from '../ListItem'
import Image from 'next/image'
import LeafletMap from '../LeafletMap'

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
	weatherState, coords, country,
}) => {
	const { cod } = weatherState

	if (cod !== 200) {
		return (
			<div>
				Sorry. Something went wrong
			</div>
		)
	}

	const { coord, name, weather, wind, rain, snow, main, clouds, dt, sys } = weatherState
	const date = formatDate(dt, { weekday: "long", month: "long", hour: "2-digit", minute: "2-digit", day: "2-digit" })
	return (
		<div className='flex flex-col gap-2 mb-4'>
			<p>
				<span className='text-xl font-bold'>{name}</span> {country ? (<>&#8212; {country};</>) : <>&#8212; {sys.country}</>}; {`${date}`}
			</p>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-col gap-2 md:flex-row md:gap-8'>
					<div>
						<div className='flex items-center gap-2'>
							<Image src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].main}
								width={36}
								height={36}
								className='object-contain bg-gray-200 rounded-full' />
							<span className='text-2xl'>{main.temp}&#176;C</span> <br />
						</div>
						<p className='max-w-[300px] flex flex-wrap'>
							{
								weather.map(tmp => (
									tmp.description.replace(tmp.description[0], tmp.description[0].toUpperCase()) + '. '
								))
							}
						</p>
					</div>
					<ul className='p-0 border-0 md:border-l-2 md:border-l-purple-300 md:p-2 flex flex-wrap max-w-[500px] gap-2'>
						<ListItem text={(
							<>
								Wind speed: {wind.speed}<sup>m</sup>/<sub>s</sub>
							</>
						)} />
						<ListItem text={(
							<>
								Perceptible temperature: {main.feels_like}&#176;C
							</>
						)} />
						<ListItem text={(
							<>
								{main.pressure}hPa
							</>
						)} />
						<ListItem text={(
							<>
								Humidity: {main.humidity}%
							</>
						)} />
						<ListItem text={(
							<>
								Cloudiness: {clouds.all}%
							</>
						)} />
						{
							rain ? (
								<ListItem text={(<>
									Rain: {rain['1h']}<sup>mm</sup>/<sub>m<sup>2</sup></sub>
								</>)} />
							) : null
						}
						{
							snow ? (
								<ListItem text={(<>
									Snow: {snow['1h']}<sup>mm</sup>/<sub>m<sup>2</sup></sub>
								</>)} />
							) : null
						}
					</ul>
				</div>
				<LeafletMap coords={coords ? coords : coord} />
			</div>
		</div>
	)
}

export default CurrentWeather
import { formatDate } from '@/utils'
import Image from 'next/image'
import React from 'react'

const HourForecast: React.FC<HourForecastProps> = ({ data }) => {
	return (
		<div className='flex flex-wrap items-center gap-2 md:flex-col lg:flex-nowrap'>
			<p className="font-semibold tracking-wide lg:border-b-2 lg:border-b-purple-300">
				{formatDate(data.dt, { hour: '2-digit', minute: '2-digit', })}
			</p>
			<div className='flex gap-1'>
				<Image
					src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
					alt={data.weather[0].main}
					width={32}
					height={32}
					className='object-contain bg-gray-200 rounded-full'
				/>
				<span className='text-2xl'>{data.main.temp}&#176;C</span> <br />
			</div>
			<p>
				{data.weather[0].description.replace(data.weather[0].description[0], data.weather[0].description[0].toUpperCase())}
			</p>
			<p>
				Cloudiness: {data.clouds.all}%
			</p>
		</div>
	)
}

export default HourForecast
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { nanoid } from 'nanoid'
import { setState } from '../utils/features/contactSlice'

const SelectElement: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
	const [showOptions, setShowOptions] = useState<boolean>(false)
	const { countries, } = useAppSelector((state) => state.countries)
	const id = 'countryPrefix';
	const contact = useAppSelector(state => state.contact)
	const dispatch = useAppDispatch()

	useEffect(() => {
		contact[id] ? null : setSearchValue('')
	}, [contact[id]])

	useEffect(() => {
		setFilteredCountries(countries.filter(country => {
			const { name, altSpellings } = country
			const { common, official } = name
			const value = searchValue.toLowerCase()
			const tmp: string[] = [common, official]
			altSpellings.forEach(spell => {
				tmp.push(spell)
			})
			if (tmp.find(n => n.toLowerCase().startsWith(value))) {
				console.log('match');
				
				return country
			}
		}))
	}, [searchValue])

	const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(ev.target.value)
		setShowOptions(true)
	}
	return (
		<div className={`relative mb-2 capitalize mr-0 min-w-[49.5%]`}>
			<input
				type={'text'}
				id={id}
				className={`h-[calc(3.5rem+2px)] leading-5 indent-[2px] block w-full py-[.375rem] pl-2 pr-4 text-base font-normal text-light-black bg-white bg-drop-down-img bg-no-repeat bg-[right_.75rem_center] bg-[length:20px_16px] appearance-none border-[1px] border-solid border-purple-500 rounded-md transition-colors transition-shadow duration-150 ease-in-out focus:border-purple-600 focus:border-2 focus:outline-none focus:shadow-input-shadow border-r-0`}
				value={searchValue}
				onChange={(event) => handleSearch(event)}
			/>
			<label 
				htmlFor={id}
				className='absolute -top-3 text-medium-gray text-xs left-0 inline-block w-full h-full px-3 py-4 overflow-hidden border-[1px] border-solid border-transparent pointer-events-none text-start text-ellipsis whitespace-nowrap'
			>type country name to search it dialing code</label>
			{
				showOptions ?
					<div className='absolute z-10 w-full py-1 mt-1 overflow-auto bg-white border-purple-500 rounded-md shadow-lg border-[1px] max-h-52'>
						{filteredCountries.map(country => (
							<div
								key={nanoid()} 
								className='px-4 py-2 cursor-pointer hover:bg-purple-100'
								onClick={() => {
									dispatch(setState({ id, value: `${country.name.common} ${country.idd.root}${country.idd.suffix}`}))
									setSearchValue(`${country.name.common} ${country.idd.root}${country.idd.suffix}`)
									setShowOptions(false)
								}}
							>
								{`${country.name.common} ${country.idd.root + country.idd.suffix}`}
							</div>
						))}
					</div> :
					null
			}
		</div>
	)
}

export default SelectElement
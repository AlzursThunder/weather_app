import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setState } from '../utils/features/contact/contactSlice'

const InputElement: React.FC<InputElementProps> = ({
	id,
	labelText,
	type
}) => {
	const contact = useAppSelector(state => state.contact)
	const dispatch = useAppDispatch()
	return (
		<div className={`relative mb-2 md:mr-2 capitalize min-w-[49.5%]`}>
			<input
				type={type}
				id={id}
				className={`h-[calc(3.5rem+2px)] leading-5 block w-full py-[.375rem] px-[.75rem] text-base font-normal text-light-black bg-white bg-clip-padding border-[1px] border-solid border-purple-500 rounded-md transition-colors transition-shadow duration-150 ease-in-out focus:border-purple-600 focus:border-2 focus:outline-none focus:shadow-input-shadow`}
				value={contact[id]}
				onChange={(ev) => {
					dispatch(setState({ id, value: ev.target.value }))
				}} />
			<label
				htmlFor={id}
				className='absolute -top-3 text-medium-gray text-xs left-0 inline-block w-full h-full px-3 py-4 overflow-hidden border-[1px] border-solid border-transparent pointer-events-none text-start text-ellipsis whitespace-nowrap'
			>{labelText}</label>
		</div>
	)
}

export default InputElement
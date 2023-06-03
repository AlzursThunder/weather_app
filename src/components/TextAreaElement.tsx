import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setState } from '../utils/features/contact/contactSlice'

const TextAreaElement: React.FC<TextAreaElement> = ({ id, labelText }) => {
	const contact = useAppSelector(state => state.contact)
	const dispatch = useAppDispatch()

	return (
		<div className={`relative mb-2 capitalize`}>
			<textarea
				className={`leading-5 block w-full h-40 py-4 px-3 text-base font-normal text-light-black bg-white bg-clip-padding border-[1px] border-solid border-purple-500 rounded-md transition-colors transition-shadow duration-150 ease-in-out focus:border-purple-600 focus:border-2 focus:outline-none focus:shadow-input-shadow`}
				id={id}
				value={contact[id]}
				onChange={(ev) => {
					dispatch(setState({ id, value: ev.target.value }))
				}}
			></textarea>
			<label
				htmlFor={id}
				className='absolute -top-3 left-0 text-medium-gray text-xs inline-block w-full h-full px-3 py-4 overflow-hidden border-[1px] border-solid border-transparent pointer-events-none text-start text-ellipsis whitespace-nowrap'
			>{labelText}</label>
		</div>
	)
}

export default TextAreaElement
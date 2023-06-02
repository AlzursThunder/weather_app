import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useAppDispatch, useAppSelector } from '../hooks'
import { resetState } from '../utils/features/contactSlice'
import { Button, InputElement, SelectElement, TextAreaElement, Warning } from '.'
import { validateContactData } from '../utils/functions'

const Contact: React.FC<ContactProps> = ({ isValid, setIsValid }) => {
	const contact = useAppSelector(state => state.contact)
	const dispatch = useAppDispatch()
	const [loading, setLoading] = useState(false)
	const handleSubmit = () => {
		setLoading(true)
		emailjs.send(
			'<service key>',
			'<template key>',
			{
				from_name: `${contact.firstName} ${contact.lastName}`,
				to_name: 'Peter',
				from_email: contact.email,
				to_email: 'justaveragewetherapp@gmail.com',
				message: `Dialing code: ${contact.countryPrefix}\n Phone number: ${contact.phone}\n Message:\n ${contact.question}`
			},
			'<public key>'
		)
			.then(() => {
				setLoading(false)
				alert('Thank you. I\'ll contact you as soon as possible.')
				dispatch(resetState())
			}, error => {
				setLoading(false)
				console.log(error);

				alert('Sorry, something went wrong.')
			})
	}
	return (
		<>
			{
				!isValid ?
					<>
						<Warning closeMsg={setIsValid} />
						<div className="fixed inset-0 z-40 bg-black opacity-50 pointer-events-none"></div>
					</> :
					null
			}
			<div className={!isValid ? 'pointer-events-none select-none' : ''}>
				<p className='text-3xl'>Get in touch</p>
				<div className='flex flex-col w-full'>
					<div className='flex flex-col md:flex-row'>
						<InputElement id='firstName' labelText='first name*' type='text' />
						<InputElement id='lastName' labelText='last name*' type='text' />
					</div>
					<div className='flex flex-col md:flex-row'>
						<InputElement id='email' labelText='email address*' type='text' />
						<div className='flex w-full'>
							<SelectElement />
							<InputElement id='phone' labelText='phone' type='tel' />
						</div>
					</div>
					<TextAreaElement id='question' labelText='questions*' />
					<div className='flex flex-col mt-2 md:flex-row'>
						<div className='md:w-2/3'>
							<b>
								* - required fields <br />
							</b>
							If you want to be contacted via phone you need also select your international dialing code.
						</div>
						<div className='flex mt-2 justify-evenly md:w-1/3 md:mt-0'>
							{
								loading ?
									'Sending...' :
									<>
										<Button btnText='reset' handleClick={() => dispatch(resetState())} />
										<Button btnText='submit' handleClick={() => {
											if (validateContactData(contact)) {
												handleSubmit()
												return
											}
											setIsValid(false)
										}} />
									</>
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
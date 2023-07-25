'use client'
import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
export const Providers = ({
	children
}: {
	children: React.ReactNode
}) => (
	<Provider store={store}>
		{children}
	</Provider>
)


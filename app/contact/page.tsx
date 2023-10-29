import Form from '@/components/Form'
import InfoSection from '@/components/InfoSection'
import React from 'react'

const Contact: React.FC = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			<InfoSection />
			<Form />
		</div>
	)
}

export default Contact
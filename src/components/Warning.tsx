import React from 'react'
import { Button } from '.'

const Warning: React.FC<WarningProps> = ({ closeMsg }) => {
	return (
		<div className='absolute z-50 w-3/4 h-40 mx-[12.5%] md:w-1/3 bg-white mt-1/3 border-purple-500 md:mx-[calc(100%/3)] border-2 rounded-lg'>
			<p className='mt-2 ml-2'>
				Please fill all required fields. Remember, if you want to submit your phone number, you must choose proper dialing code.
			</p>
			<div className='absolute right-2 bottom-2'>
				<Button btnText='ok' handleClick={() => { closeMsg(true) }} />
			</div>
		</div>
	)
}

export default Warning
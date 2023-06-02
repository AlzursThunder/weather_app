import React from 'react'
import { Button } from '.'

const Warning: React.FC<WarningProps> = ({ closeMsg }) => {
	return (
		<div className='absolute z-50 w-3/4 h-40 mx-[12.5%] md:w-1/3 bg-white mt-1/3 border-purple-500 md:mx-[calc(100%/3)] border-2 rounded-lg'>
			<p className='text-center mt-[4.5em]'>
				Please fill 
			</p>
			<div className='absolute right-2 bottom-2'>
				<Button btnText='ok' handleClick={() => { closeMsg(true) }} />
			</div>
		</div>
	)
}

export default Warning
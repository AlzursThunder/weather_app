import React from 'react'

const Button: React.FC<ButtonProps> = ({ btnText, handleClick, id }) => {
	
	return (
		<>
			<button 
				type='button'
				className='px-4 py-1 bg-purple-100 text-blue-950 border-2 border-purple-700 rounded-md w-[100px] uppercase'
				onClick={handleClick}
				id={id}
			>{btnText}</button>
		</>
	)
}

export default Button
import React, { useRef } from 'react'
import githubDark from '/src/assets/github-logos/GitHub_Logo.png'
import logoDark from '/src/assets/Pogodynka-logos/Pogodynka-logos_transparent.png'

const Header: React.FC<HeaderProps> = ({ setRenderHome }) => {
	const linksList = useRef<HTMLUListElement>(null)
	
	return (
		<nav className='mb-2 shadow-md select-none'>
			{/* nav center */}
			<div className='md:max-w-[1170px] md:mx-auto md:my-0 md:flex md:items-center md:justify-between md:p-2'>
				{/* nav header */}
				<div className='flex items-center justify-between p-4 md:p-0'>
						<img 
							className='h-[72px] cursor-pointer' 
							src={logoDark} 
							alt="pogodynka-logo" 
							onClick={() => {setRenderHome(() => true)}}
						/>
					<button className='text-2xl text-blue-600 bg-transparent border-transparent cursor-pointer hover:text-blue-900 md:hidden' 
					onClick={() => {
						linksList.current?.classList.toggle('h-20')
					}}>
						<i className='fas fa-bars' />
					</button>
				</div>
				{/* links */}
				<ul className='h-0 overflow-hidden transition-all duration-300 ease-linear md:h-auto md:flex' ref={linksList}>
					<li className='block px-4 py-2 text-base tracking-widest text-center text-gray-700 capitalize transition-all duration-300 ease-linear cursor-pointer hover:bg-blue-300 hover:text-blue-500 hover:pl-6 md:p-0 md:my-0 md:mx-2 md:hover:p-0 md:hover:bg-transparent' onClick={() => setRenderHome(() => true)}>
						Home
					</li>
					<li className='block px-4 py-2 text-base tracking-widest text-center text-gray-700 capitalize transition-all duration-300 ease-linear cursor-pointer hover:bg-blue-300 hover:text-blue-500 hover:pl-6 md:p-0 md:my-0 md:mx-2 md:hover:p-0 md:hover:bg-transparent' onClick={() => setRenderHome(() => false)}>
						Contact
					</li>
				</ul>
				{/* socials */}
				<ul className='hidden md:flex'>
					<li>
						<a className='md:text-blue-500 md:my-0 md:mx-2 md:hover:text-blue-300' href="https://github.com/AlzursThunder" target='_blank'>
							<img className='h-6' src={githubDark} alt="github" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header
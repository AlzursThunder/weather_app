// 'use client'
import Link from 'next/link'
import React from 'react'
import { menuLinks } from '@/constants'
import { cn } from '@/utils'

const HeadLink: React.FC<HeadLinkProps> = ({
	data, isCurrent,
}) => (
	<Link href={data.path} className={cn(
		'block p-1 tracking-wide text-center text-gray-700 capitalize transition-all duration-200 ease-linear text-lg hover:underline',
		isCurrent && 'font-semibold text-black',
	)}>
		{data.title}
	</Link>
)

const HeaderLinks: React.FC<HeaderLinksProps> = ({ path }) => (
	<ul className='hidden md:flex md:gap-4'>
		{
			menuLinks.map(link => (
				<HeadLink key={link.title} data={link} isCurrent={path === link.path} />
			))
		}
	</ul>
)


export default HeaderLinks
import React from 'react'
import { Mail, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const InfoSection: React.FC = () => {
	return (
		<section className='flex flex-col items-center justify-center w-full gap-3 md:w-1/2'>
			<Link
				href={'https://github.com/AlzursThunder'}
				target='_blank'
				className='flex gap-4 text-lg font-semibold tracking-wide'
			>
				<Image
					src={'/avatar.png'}
					alt='profile'
					width={28}
					height={28}
					priority
					className='object-contain rounded-full'
				/>
				My GitHub
			</Link>
			<div className='flex gap-4 text-lg'>
				<Mail size={28} />
				<Link
					className='font-semibold tracking-wide'
					href={'mailto:piotrdziedzina.dev@gmail.com'}
				>piotrdziedzina.dev@gmail.com</Link>
			</div>
		</section>
	)
}

export default InfoSection
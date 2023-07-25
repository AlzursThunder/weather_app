// 'use client'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { menuLinks } from '@/constants'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { cn } from '@/utils'

const Dropdown: React.FC<HeaderLinksProps> = ({ path }) => (
	<DropdownMenu>
		<DropdownMenuTrigger className='block focus:outline-none md:hidden'>
			<Menu />
		</DropdownMenuTrigger>
		<DropdownMenuContent className='mr-4 tracking-wide capitalize'>
			{
				menuLinks.map(link => (
					<DropdownMenuItem
						key={link.path}
						className={cn(
							'text-gray-700',
							path === link.path && 'font-semibold',
						)}
					>
						<Link href={link.path}>{link.title}</Link>
					</DropdownMenuItem>
				))
			}
			<DropdownMenuItem>
				<Link
					href={'https://github.com/AlzursThunder'}
					target='_blank'>
					My GitHub
				</Link>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
)


export default Dropdown
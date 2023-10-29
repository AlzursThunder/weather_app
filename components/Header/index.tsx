"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderLinks from "../HeaderLinks";
import Dropdown from "../Dropdown";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
	const currentPathname = usePathname();

	return (
		<nav className="mb-1 shadow-md select-none">
			{/* nav center */}
			<div className="md:max-w-[1170px] md:mx-auto flex w-full justify-between items-center px-6">
				{/* nav header */}
				<Link href={"/"}>
					<Image
						src={"/pogodynka-logos/pogodynka-logo_main.png"}
						alt="Pogodynka"
						height={100}
						width={100}
						className="object-contain"
					/>
				</Link>
				<div className="flex items-center gap-20">
					{/* links */}
					<HeaderLinks path={currentPathname} />
					{/* socials */}
					<Link
						href={"https://github.com/AlzursThunder"}
						target="_blank"
						className="hidden md:block">
						<Image
							src={"/github-logos/GitHub_Logo.png"}
							alt="My GitHub profile"
							width={80}
							height={35}
							className="object-contain"
						/>
					</Link>
				</div>
				<Dropdown path={currentPathname} />
			</div>
		</nav>
	);
};

export default Header;

"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import {
	updatePrevious,
} from "@/redux/features/user/searched-location/searchedLocationSlice";
import {
	Command,
	CommandDialog,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import { suggestedCities } from "@/constants";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const SearchBar: React.FC = () => {
	const router = useRouter()
	const [open, setOpen] = useState(false);
	const [searchedValue, setSearchedValue] = useState("");
	const dispatch = useAppDispatch();
	const { previouslySearched } = useAppSelector(
		(state) => state.searchedLocation
	);

	const handleClick = (ev: string) => {
		router.push(`/${ev}`)
		dispatch(updatePrevious(ev))
	};

	return (
		<Command className="px-8">
			<CommandInput
				onClick={() => setOpen((prev) => !prev)}
				placeholder="Type city/ village name"
				value={searchedValue}
			/>
			<CommandDialog
				open={open}
				onOpenChange={setOpen}
			>
				{/* <div className="items-center justify-between w-full "> */}
					<CommandInput
						placeholder="Type city/ village name"
						onChangeCapture={(ev) => {
							const { value } = ev.target as HTMLInputElement;
							setSearchedValue(value);
						}}
						value={searchedValue}
						className="w-3/4"
					/>
					<Button className="w-full border-none" variant={'outline'} onClick={() => {
						handleClick(searchedValue)
					}}>Search</Button>

				{/* </div> */}
				<CommandList>
					<CommandGroup heading="Previously searched">
						{previouslySearched.length ? (
							previouslySearched.map((prev) => (
								<CommandItem
									key={nanoid()}
									onSelect={handleClick}
								>
									{prev}
								</CommandItem>
							))
						) : (
							<CommandItem disabled>No previous searches</CommandItem>
						)}
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Suggested">
						{suggestedCities.map((city) => (
							<CommandItem
								key={city}
								onSelect={(ev) => handleClick(ev)}
							>
								{city}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</Command>
	);
};

export default SearchBar;

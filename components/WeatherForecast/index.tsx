"use client";
import { formatDate } from "@/utils";
import { nanoid } from "nanoid";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import HourForecast from "../HourForecast";

const WeatherForecast: React.FC<WeatherForecastProps> = ({ weatherState }) => {
	const { cod, city } = weatherState;

	if (cod !== "200") return <div>Sorry. Something went wrong</div>;

	const { list } = weatherState;
	const [currElId, setCurrElId] = useState("");
	const navDates: string[] = useMemo(() => [], []);
	list.filter((item) => {
		const date = formatDate(item.dt, {
			month: "numeric",
			day: "numeric",
			weekday: "short",
		});
		!navDates.includes(date) ? navDates.push(date) : null;
	});

	useEffect(() => {
		setCurrElId(navDates[0]);
	}, [navDates]);

	return (
		<div>
			<h3>5 days weather forecast for {city.name}</h3>
			<div className="flex flex-col gap-3">
				<nav className="flex flex-wrap gap-6 mx-auto">
					{navDates.map((date) => (
						<Button
							key={date}
							variant={"special"}
							onClick={(ev) => {
								const { id } = ev.target as HTMLDivElement;
								setCurrElId(id);
							}}
							id={date}>
							{date}
						</Button>
					))}
				</nav>
				{navDates.map((date) => {
					return (
						<div
							key={nanoid()}
							className={`flex flex-col md:flex-row flex-wrap gap-5 mx-auto ${
								currElId === date ? "" : "hidden"
							}`}
							id={date}>
							{list.map((item) => {
								if (
									formatDate(item.dt, {
										month: "numeric",
										day: "numeric",
										weekday: "short",
									}) === date
								) {
									return (
										<HourForecast
											key={nanoid()}
											data={item}
										/>
									);
								}
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WeatherForecast;

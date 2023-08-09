"use client";
import { cities } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useMemo, useState } from "react";

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const length = cities.length;

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		} else {
			setCurrentIndex(length - 1);
		}
	};

	const next = () => {
		if (currentIndex < length - 1) {
			setCurrentIndex((prevState) => prevState + 1);
		} else {
			setCurrentIndex(0);
		}
	};

	return (
		// container
		<div className="carousel-container">
			{/* wrapper */}
			<div className="carousel-wrapper">
				<ChevronLeft
					className="left-arrow"
					onClick={prev}
				/>
				{/* content wrapper */}
				<div className="carousel-content-wrapper">
					{/* content */}
					<div
						className={`carousel-content`}
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{children}
					</div>
				</div>
				<ChevronRight
					className="right-arrow"
					onClick={next}
				/>
			</div>
		</div>
	);
};

export default Carousel;

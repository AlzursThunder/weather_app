"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center gap-5">
			<h2>Something went wrong!</h2>
			<Button
				variant={"special"}
				onClick={() => reset()}
			>
				Try again
			</Button>
		</div>
	);
};

export default Error;

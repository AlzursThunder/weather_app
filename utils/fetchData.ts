import next from "next";
import { NextResponse } from "next/server";

const fetchData = async (url: string, revalidate?: number | false | undefined) => {
	try {
		const res = await fetch(url, { next: { revalidate }});
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
		return new NextResponse("Error. Something went wrong", { status: 500 });
	}
};

export default fetchData;

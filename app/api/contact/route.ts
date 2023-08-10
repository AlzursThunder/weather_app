import { NextRequest, NextResponse } from "next/server";
const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";

export const POST = async (req: NextRequest) => {
	try {
		const { email, first_name, last_name, message } = await req.json();

		const data = {
			service_id: process.env.EMAILJS_SERVICE,
			template_id: process.env.EMAILJS_TEMPLATE,
			user_id: process.env.EMAILJS_PUBLIC,
			template_params: {
				from_name: `${first_name} ${last_name}`,
				from_email: email,
				message,
			},
			accessToken: process.env.EMAILJS_PRIVATE,
		};

		const response = await fetch(EMAILJS_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return new NextResponse(JSON.stringify(response), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};

"use client";
import React, { useState } from "react";
import { formCotrolsData } from "@/constants";
import FormControl from "../FormControl";
import { reset, update } from "@/redux/features/contact/contactSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { validateForm } from "@/utils";
import { Button } from "../ui/button";
const Form = () => {
	const contactData = useAppSelector((state) => state.contact);
	const dispatch = useAppDispatch();
	const [isSending, setIsSending] = useState(() => false);

	const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		setIsSending(true);
		ev.preventDefault();
		if (!validateForm(contactData)) {
			alert("Please fill all fields");
			setIsSending(false);
			return;
		}
		try {
			// app/api/contact/route.ts
			await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({
					...contactData, // it's same as:
					// first_name: contactData.first_name,
					// last_name: contactData.last_name,
					// email: contactData.email,
					// message: contactData.message,
				}),
			}).then(() => dispatch(reset()));
			alert("Thanks for contact. I will reach out to you as soon as possible.");
		} catch (error) {
			alert("Something went wrong.\n" + error);
		} finally {
			setIsSending(false);
		}
	};

	const handleChange = (
		ev:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const id = ev.target.id as Ids;
		dispatch(update({ id, value: ev.target.value }));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col w-full gap-3 p-2 md:w-1/2"
		>
			{formCotrolsData.map((item) => (
				<FormControl
					key={item.id}
					handleChange={handleChange}
					inputValue={contactData[item.id]}
					{...item}
				/>
			))}
			<section className="flex items-center justify-between">
				<p className="font-semibold tracking-wide">
					Required fields are marked with{" "}
					<span className="text-red-600">*</span>
				</p>
				<div className="flex gap-4">
					{isSending ? (
						<Button disabled>Sending...</Button>
					) : (
						<>
							<Button
								type="reset"
								onClick={() => dispatch(reset())}
							>
								Reset
							</Button>
							<Button type="submit">Submit</Button>
						</>
					)}
				</div>
			</section>
		</form>
	);
};

export default Form;

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormControl: React.FC<FormControlProps> = ({
	handleChange,
	id,
	inputType,
	inputValue,
	labelTitle,
	renderInput,
}) => (
	<div className="w-full">
		<Label
			htmlFor={id}
			className="pl-1 text-lg font-bold"
		>
			{labelTitle} <span className="text-red-600">*</span>
		</Label>
		{renderInput ? (
			<Input
				id={id}
				onChange={handleChange}
				value={inputValue}
				type={inputType}
				required
				autoComplete="off"
			/>
		) : (
			<Textarea
				className="bg-white"
				id={id}
				onChange={handleChange}
				value={inputValue}
				required
			/>
		)}
	</div>
);

export default FormControl;

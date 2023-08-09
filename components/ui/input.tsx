import * as React from "react"

import { cn } from "@/utils"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50", // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
					'border-solid border-purple-500 rounded-md transition-colors transition-shadow duration-150 ease-in-out focus:border-purple-600 focus:border-2 border',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

export { Input }

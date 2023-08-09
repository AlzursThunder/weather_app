import * as React from "react"

import { cn } from "@/utils"

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[80px] w-full rounded-md bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50", // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
					'border-solid border-purple-500 rounded-md transition-colors transition-shadow duration-150 ease-in-out focus:border-purple-600 focus:border-2 border',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Textarea.displayName = "Textarea"

export { Textarea }

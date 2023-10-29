export const menuLinks: Link[] = [
	{
		path: "/",
		title: "home",
	},
	{
		path: "/contact",
		title: "contact",
	},
];

export const formCotrolsData: FormCotrolData[] = [
	{
		labelTitle: "First name",
		id: "first_name",
		renderInput: true,
		inputType: "text",
	},
	{
		labelTitle: "Last name",
		id: "last_name",
		renderInput: true,
		inputType: "text",
	},
	{
		labelTitle: "Email",
		id: "email",
		renderInput: true,
		inputType: "email",
	},
	{
		labelTitle: "Message",
		id: "message",
		renderInput: false,
	},
];

export const cities: string[] = [
	"Edinburgh",
	"Chicago",
	"Sopot",
	"Prague",
	"Madrid",
	"New York",
];

export const suggestedCities: string[] = [
	"Warsaw",
	"Amsterdam",
	"Tokyo",
	"Hamburg",
];

export const errCities = [
	"Pekin",
	"Lisbon",
]

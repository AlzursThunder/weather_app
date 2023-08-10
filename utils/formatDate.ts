export default function formatDate(timestamp: number, options: Intl.DateTimeFormatOptions) {
	return new Intl.DateTimeFormat("us", options).format(timestamp * 1000)
}
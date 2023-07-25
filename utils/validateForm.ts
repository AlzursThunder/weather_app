const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function validateForm(data: ContactInitialState) {
	const { email, first_name, last_name, message } = data;
	if (!first_name || !last_name || !message) return false;
	if (!emailRegex.test(email)) return false;

	return true;
}

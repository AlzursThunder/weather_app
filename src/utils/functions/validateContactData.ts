const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateContactData = ({ countryPrefix, email, firstName, lastName, phone, question }: ContactInitialState): boolean => {
	if (!firstName || !lastName || !question) return false
	if (!emailRegex.test(email)) return false
	if (phone && !countryPrefix) return false
	return true
};

export default validateContactData;

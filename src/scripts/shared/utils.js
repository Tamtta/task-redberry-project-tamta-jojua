export function generateErrorMessage(message, element) {
	element.innerHTML = message;
	element.classList.remove("hide");
}

export function generateDate(
	firstnameValue,
	lastNameValue,
	emailValue,
	phoneValue,
	id,
) {
	const newData = generateNewData(
		firstnameValue,
		lastNameValue,
		emailValue,
		phoneValue,
		id,
	);

	const localStorageData = localStorage.getItem(id);
	if (localStorageData) {
		return {
			...JSON.parse(localStorageData),
			...newData,
		};
	} else {
		return newData;
	}
}

function generateNewData(
	firstnameValue,
	lastNameValue,
	emailValue,
	phoneValue,
	id,
) {
	return {
		token: id,
		first_name: firstnameValue,
		last_name: lastNameValue,
		email: emailValue,
		phone: phoneValue,
	};
}

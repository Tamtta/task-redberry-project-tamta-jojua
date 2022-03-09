import { generateErrorMessage } from "../shared/utils.js";

export function validateFirstName(firstnameValue, firstNameAlert) {
	if (firstnameValue == "") {
		generateErrorMessage("*firstname is required", firstNameAlert);
		return false;
	} else if (firstnameValue.length < 2) {
		generateErrorMessage(
			"*first name should inculde 2 or more characters",
			firstNameAlert,
		);
		return false;
	} else {
		firstNameAlert.classList.add("hide");
		return true;
	}
}

export function validateLastName(lastNameValue, lastNameAlert) {
	if (lastNameValue == "") {
		generateErrorMessage("*last name is required", lastNameAlert);

		return false;
	} else if (lastNameValue.length < 2) {
		generateErrorMessage(
			"*last name should inculde 2 or more characters",
			lastNameAlert,
		);
		return false;
	} else {
		lastNameAlert.classList.add("hide");
		return true;
	}
}

export function validateEmail(emailValue, emailNameAlert) {
	if (emailValue == "") {
		generateErrorMessage("*email is required", emailNameAlert);
		return false;
	} else if (!emailValue.includes("@")) {
		generateErrorMessage(
			"*this is not correct format for email",
			emailNameAlert,
		);
		return false;
	} else {
		emailNameAlert.classList.add("hide");
		return true;
	}
}

export function validatePhone(phoneValue, phoneNameAlert) {
	if (!phoneValue.startsWith("+995") && phoneValue.length !== 0) {
		generateErrorMessage("*this is not correct format", phoneNameAlert);
		return false;
	} else {
		phoneNameAlert.classList.add("hide");
		return true;
	}
}

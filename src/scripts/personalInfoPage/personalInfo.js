//prettier-ignore
import { validateFirstName, validateLastName,validateEmail, validatePhone,
										} from "../validators/personalPageValidators.js";
//prettier-ignore
import { firstname, lastName, email, phone, nextBtn, firstNameAlert, 
		lastNameAlert, emailNameAlert, phoneNameAlert  } from "./elements.js";

import { id } from "../shared/globalVariables.js";
import { generateDate } from "../shared/utils.js";
import { setLocalStorageData } from "../services/localStroageService.js";

export function validate() {
	nextBtn.addEventListener("click", () => {
		const firstnameValue = firstname.value.trim();
		const lastNameValue = lastName.value.trim();
		const emailValue = email.value.trim();
		const phoneValue = phone.value.trim();

		if (!validateFirstName(firstnameValue, firstNameAlert)) return;
		if (!validateLastName(lastNameValue, lastNameAlert)) return;
		if (!validateEmail(emailValue, emailNameAlert)) return;
		if (!validatePhone(phoneValue, phoneNameAlert)) return;

		const personalData = generateDate(
			firstnameValue,
			lastNameValue,
			emailValue,
			phoneValue,
			id,
		);

		setLocalStorageData(id, personalData);
		location.href = "./skills.html";
	});
}

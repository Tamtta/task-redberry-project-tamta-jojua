import { generateErrorMessage } from "../shared/utils.js";
export function validateSkills(experience, skillID, chosenSkills, element) {
	if (isNaN(experience)) {
		generateErrorMessage("*ou need to set year in numbers only", element);
		return false;
	}
	if (experience == "") {
		generateErrorMessage("*you need to indicate experience", element);
		return false;
	}
	if (chosenSkills.find((el) => el.id == skillID)) {
		generateErrorMessage("*skill is already chosen", element);
		return false;
	}
	element.classList.add("hide");
	return true;
}

export function validateSkillAmount(chosenSkills, element) {
	if (chosenSkills.length < 1) {
		generateErrorMessage("*you need to choose minimum one skill", element);
		return false;
	}
	element.classList.add("hide");
	return true;
}

import {
	skillsElement,
	experienceInput,
	skillBtn,
	nextBtn,
	skillWarning,
} from "./elements.js";
import { renderChosenSkills } from "./renderingSkills.js";
import {
	validateSkills,
	validateSkillAmount,
} from "../validators/skillPageValidators.js";
import { id } from "../shared/globalVariables.js";
import {
	setLocalStorageData,
	getLocalStorageData,
} from "../services/localStroageService.js";
import { addAdditionalDataToLocalStorage } from "../services/localStroageService.js";

let chosenSkills = [];

export function addSkill(skills) {
	skillBtn.addEventListener("click", () => {
		const skillID = skillsElement.value;
		const experience = Number(experienceInput.value.trim());

		if (!validateSkills(experience, skillID, chosenSkills, skillWarning))
			return;

		chosenSkills.push({ id: skillID, experience });
		renderChosenSkills(chosenSkills, skills);
		addListenersToDeleteButtons();
	});
}

export function nextPage() {
	nextBtn.addEventListener("click", () => {
		if (!validateSkillAmount(chosenSkills, skillWarning)) return;
		addAdditionalDataToLocalStorage(id, { skills: [...chosenSkills] });
		// setSkills(chosenSkills);
		location.href = "./covid.html";
	});
}

function addListenersToDeleteButtons() {
	const deleteBtns = document.getElementsByClassName("deleteSkill");
	for (let btn of deleteBtns) {
		btn.addEventListener("click", deleteSkill);
	}
}

function deleteSkill(event) {
	const id = event.target.parentNode.id;
	chosenSkills = chosenSkills.filter((el) => el.id != id);
	renderChosenSkills(chosenSkills);
}

// function setSkills(chosenSkills) {
// 	let data = getLocalStorageData(id);
// 	data = { ...data, skills: [...chosenSkills] };
// 	setLocalStorageData(id, data);
// 	location.href = "./covid.html";
// }

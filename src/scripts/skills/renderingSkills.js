import { skillsElement, experWrapper } from "./elements.js";

export function renderSkils(skills) {
	let html = ``;
	for (let skill of skills) {
		html += `<option value="${skill.id}">${skill.title}</option>`;
	}
	skillsElement.insertAdjacentHTML("beforeend", html);
}

export function renderChosenSkills(chosenSkills, skills) {
	let html = ``;
	experWrapper.innerHTML = "";
	for (let skill of chosenSkills) {
		const skillName = skills.find((el) => el.id == skill.id).title;
		html += `<div class="chosenExperience">
							<div class="innerText">
								<span class="skillSpan">${skillName}</span>
								<span class="experienSpan">${skill.experience}</span>
							</div>
							<button class="deleteSkill" id="${skill.id}"><img src="./assets/Remove.svg" alt="" /></button>
						</div>`;
	}
	if (chosenSkills.length) {
		experWrapper.classList.remove("hide");
	} else {
		experWrapper.classList.add("hide");
	}
	experWrapper.insertAdjacentHTML("beforeend", html);
}

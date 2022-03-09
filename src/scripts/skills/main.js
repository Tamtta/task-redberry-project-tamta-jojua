import { getSkills } from "../services/api.js";
import { renderSkils } from "./renderingSkills.js";
import { addSkill, nextPage } from "./skills.js";
import { activateGoBackBtn } from "../shared/goBack.js";
async function main() {
	const skills = await getSkills();
	renderSkils(skills);
	addSkill(skills);
	nextPage();
	activateGoBackBtn();
}

main();

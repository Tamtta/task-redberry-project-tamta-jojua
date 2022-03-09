import { getApplications, getSkills } from "../services/api.js";
import { id, skillsData } from "../shared/globalVariables.js";
import { renderApplications } from "./render.js";
async function main() {
	const applications = await getApplications(id);
	skillsData.push(...(await getSkills()));
	renderApplications(applications);
}

main();

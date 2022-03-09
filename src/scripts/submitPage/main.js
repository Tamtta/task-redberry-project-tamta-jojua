import { submitApplication } from "./submit.js";
import { id } from "../shared/globalVariables.js";
import { activateGoBackBtn } from "../shared/goBack.js";
function main() {
	submitApplication(id);
	activateGoBackBtn();
}
main();

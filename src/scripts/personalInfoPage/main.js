import { validate } from "./personalInfo.js";
import { activateGoBackBtn } from "../shared/goBack.js";
function main() {
	validate();
	activateGoBackBtn();
}

main();

import { checkAttendStatus, nextPage } from "./aboutme.js";
import { activateGoBackBtn } from "../shared/goBack.js";
function main() {
	checkAttendStatus();
	nextPage();
	activateGoBackBtn();
}

main();

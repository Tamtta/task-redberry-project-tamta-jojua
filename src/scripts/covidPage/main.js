import {
	checkeWorkMode,
	checkCovidStatus,
	chekCovidDate,
	checkVaccineStatus,
	checkVaccineAt,
	checkAndSet,
} from "./covid.js";
import { activateGoBackBtn } from "../shared/goBack.js";
function main() {
	checkeWorkMode();
	checkCovidStatus();
	chekCovidDate();
	checkVaccineStatus();
	checkVaccineAt();
	checkAndSet();
	activateGoBackBtn();
}

main();

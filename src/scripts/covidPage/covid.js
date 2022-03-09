import * as covidPageElements from "./elements.js";
import {
	validateCovidDate,
	validateWorkPreference,
	validateCovidStat,
	validateVaccineStat,
	validateVaccineDate,
} from "../validators/covidPageValidators.js";
import { id, userCovidData } from "../shared/globalVariables.js";
import { addAdditionalDataToLocalStorage } from "../services/localStroageService.js";

export function checkeWorkMode() {
	for (let el of covidPageElements.workModes) {
		el.addEventListener("click", (e) => {
			userCovidData["work_preference"] = e.target.value;
		});
	}
}

export function checkCovidStatus() {
	for (let el of covidPageElements.covidStatus) {
		el.addEventListener("click", (e) => {
			const status = e.target.value == "true" ? true : false;
			if (status) {
				covidPageElements.covidDate.classList.remove("hide");
			} else {
				delete userCovidData["had_covid_at"];
				covidPageElements.covidDate.classList.add("hide");
			}
			userCovidData["had_covid"] = status;
		});
	}
}

export function chekCovidDate() {
	covidPageElements.covidDateInp.addEventListener("change", (e) => {
		userCovidData["had_covid_at"] = e.target.value;
	});
}

export function checkVaccineStatus() {
	for (let el of covidPageElements.vaccineStatus) {
		el.addEventListener("click", (e) => {
			const status = e.target.value == "true" ? true : false;
			if (status) {
				covidPageElements.vaccinatedAt.classList.remove("hide");
			} else {
				delete userCovidData["vaccinated_at"];
				covidPageElements.vaccinatedAt.classList.add("hide");
			}
			userCovidData["vaccinated"] = status;
		});
	}
}

export function checkVaccineAt() {
	covidPageElements.vaccinatedAtInp.addEventListener("change", (e) => {
		userCovidData["vaccinated_at"] = e.target.value;
	});
}

export function checkAndSet() {
	covidPageElements.nextBtn.addEventListener("click", (e) => {
		if (!validateWorkPreference(userCovidData, covidPageElements.workPref))
			return;
		if (!validateCovidStat(userCovidData, covidPageElements.covidStatusWarn))
			return;
		if (!validateCovidDate(userCovidData, covidPageElements.covidDateWarn))
			return;
		if (!validateVaccineStat(userCovidData, covidPageElements.vaccineWarn))
			return;
		if (
			!validateVaccineDate(userCovidData, covidPageElements.vaccineDateAtWarn)
		)
			return;
		addAdditionalDataToLocalStorage(id, userCovidData);
		location.href = "./aboutMe.html";
	});
}

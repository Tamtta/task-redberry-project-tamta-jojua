export function validateWorkPreference(userCovidData, workPref) {
	if (!userCovidData.hasOwnProperty("work_preference")) {
		workPref.classList.remove("hide");
		return false;
	}
	workPref.classList.add("hide");
	return true;
}

export function validateCovidStat(userCovidData, covidStatusWarn) {
	if (!userCovidData.hasOwnProperty("had_covid")) {
		covidStatusWarn.classList.remove("hide");
		return false;
	}
	covidStatusWarn.classList.add("hide");
	return true;
}

export function validateCovidDate(userCovidData, covidDateWarn) {
	if (
		userCovidData["had_covid"] == true &&
		!userCovidData.hasOwnProperty("had_covid_at")
	) {
		covidDateWarn.classList.remove("hide");
		return false;
	}
	covidDateWarn.classList.add("hide");
	return true;
}

export function validateVaccineStat(userCovidData, vaccineWarn) {
	if (!userCovidData.hasOwnProperty("vaccinated")) {
		vaccineWarn.classList.remove("hide");
		return false;
	}
	vaccineWarn.classList.add("hide");
	return true;
}

export function validateVaccineDate(userCovidData, vaccineDateAtWarn) {
	if (
		userCovidData["vaccinated"] == true &&
		!userCovidData.hasOwnProperty("vaccinated_at")
	) {
		vaccineDateAtWarn.classList.remove("hide");
		return false;
	}
	vaccineDateAtWarn.classList.add("hide");
	return true;
}

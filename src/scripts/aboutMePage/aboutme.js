import {
	attendTalk,
	devTalkTopicDiv,
	devtalkTopicInput,
	specialAboutMeInput,
	nextBtn,
	devTalkAttenWarning,
	devTalkTopicWarning,
	specialAboutMeWarning,
} from "./elements.js";

import {
	validateDevTalkAttendance,
	validateDevTalkTopic,
	validateSpecialAboutMe,
} from "../validators/aboutMePageValidators.js";

import { id, userAboutMeData } from "../shared/globalVariables.js";
import { addAdditionalDataToLocalStorage } from "../services/localStroageService.js";

let isTalkTopic = false;

export function checkAttendStatus() {
	for (let item of attendTalk) {
		item.addEventListener("click", (e) => {
			const status = e.target.value == "true" ? true : false;
			if (status) {
				isTalkTopic = true;
				devTalkTopicDiv.classList.remove("hide");
			} else {
				isTalkTopic = false;
				delete userAboutMeData["devtalk_topic"];
				devTalkTopicDiv.classList.add("hide");
			}
			userAboutMeData["will_organize_devtalk"] = status;
		});
	}
}

export function checkTalkTopic() {
	userAboutMeData["devtalk_topic"] = devtalkTopicInput.value;
}

export function checkSpecialAboutMe() {
	if (specialAboutMeInput.value != "")
		userAboutMeData["something_special"] = specialAboutMeInput.value;
}

export function nextPage() {
	nextBtn.addEventListener("click", () => {
		if (isTalkTopic) checkTalkTopic();
		checkSpecialAboutMe();
		if (!validateDevTalkAttendance(userAboutMeData, devTalkAttenWarning))
			return;
		if (!validateDevTalkTopic(userAboutMeData, devTalkTopicWarning)) return;
		if (!validateSpecialAboutMe(userAboutMeData, specialAboutMeWarning)) return;
		addAdditionalDataToLocalStorage(id, userAboutMeData);
		location.href = "./submit.html";
	});
}

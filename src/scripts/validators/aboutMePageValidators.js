export function validateDevTalkAttendance(
	userAboutMeData,
	devTalkAttenWarning,
) {
	if (!userAboutMeData.hasOwnProperty("will_organize_devtalk")) {
		devTalkAttenWarning.classList.remove("hide");
		return false;
	}
	devTalkAttenWarning.classList.add("hide");
	return true;
}

export function validateDevTalkTopic(userAboutMeData, devTalkTopicWarning) {
	if (
		userAboutMeData["will_organize_devtalk"] == true &&
		userAboutMeData["devtalk_topic"] == ""
	) {
		devTalkTopicWarning.classList.remove("hide");
		return false;
	}
	devTalkTopicWarning.classList.add("hide");
	return true;
}

export function validateSpecialAboutMe(userAboutMeData, specialAboutMeWarning) {
	if (!userAboutMeData.hasOwnProperty("something_special")) {
		specialAboutMeWarning.classList.remove("hide");
		return false;
	}
	specialAboutMeWarning.classList.add("hide");
	return true;
}

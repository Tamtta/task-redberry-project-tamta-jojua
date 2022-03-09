import { postApplication } from "../services/api.js";
import { submitBtn } from "./elements.js";

import {
	clearLocalStorageData,
	getLocalStorageData,
} from "../services/localStroageService.js";
export function submitApplication(id) {
	submitBtn.addEventListener("click", () => {
		const data = getLocalStorageData(id);
		postApplication(data).then(() => {
			clearLocalStorageData(id);
			location.href = "./thankYouPage.html";
		});
	});
}

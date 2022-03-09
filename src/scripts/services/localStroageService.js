export function clearLocalStorageData(id) {
	localStorage.removeItem(id);
}

export function getLocalStorageData(id) {
	return JSON.parse(localStorage.getItem(id));
}

export function setLocalStorageData(id, data) {
	localStorage.setItem(id, JSON.stringify(data));
}

export function addAdditionalDataToLocalStorage(id, additionalData) {
	let data = getLocalStorageData(id);
	data = {
		...data,
		...additionalData,
	};
	setLocalStorageData(id, data);
}
